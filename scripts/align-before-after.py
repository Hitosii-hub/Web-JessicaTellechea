#!/usr/bin/env python3
"""Align a before/after image pair for capillary treatment compare sliders.

Focuses on crown/scalp (vertex), not long hanging hair. BEFORE stays fixed; AFTER
is registered to match. Both outputs share identical dimensions and crop box.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import cv2
import numpy as np


def load_bgr(path: Path) -> np.ndarray:
    img = cv2.imread(str(path), cv2.IMREAD_COLOR)
    if img is None:
        raise FileNotFoundError(path)
    return img


def clinical_scalp_crop(img: np.ndarray) -> np.ndarray:
    """Remove legs/background from overhead clinic shots."""
    h, w = img.shape[:2]
    return img[int(h * 0.40) : int(h * 0.99), int(w * 0.06) : int(w * 0.94)]


def content_mask(gray: np.ndarray) -> np.ndarray:
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    _, mask = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=1)
    return mask


def scalp_focus_bbox(
    gray: np.ndarray,
    *,
    y_top_pct: float = 3.0,
    y_bottom_pct: float = 50.0,
    x_side_pct: float = 10.0,
    crown_lift: float = 0.14,
) -> tuple[int, int, int, int]:
    """BBox on crown/scalp; excludes long hair below y_bottom_pct."""
    h, w = gray.shape[:2]
    mask = content_mask(gray)
    ys, xs = np.where(mask > 0)
    if len(ys) == 0:
        return 0, 0, w, h

    y_top = int(np.percentile(ys, y_top_pct))
    y_bottom = int(np.percentile(ys, y_bottom_pct))
    x_left = int(np.percentile(xs, x_side_pct))
    x_right = int(np.percentile(xs, 100.0 - x_side_pct))

    bh = max(40, y_bottom - y_top)
    y_top = max(0, y_top - int(bh * crown_lift))

    pad_x = int((x_right - x_left) * 0.03)
    return (
        max(0, x_left - pad_x),
        y_top,
        min(w, x_right + pad_x),
        min(h, max(y_bottom, y_top + 40)),
    )


def merge_scalp_bboxes(a: tuple[int, int, int, int], b: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
    """Shared framing: union width, highest crown, trim long hair at the lower bound."""
    x0 = min(a[0], b[0])
    y0 = min(a[1], b[1])
    x1 = max(a[2], b[2])
    y1 = min(a[3], b[3])
    if x1 <= x0 or y1 <= y0:
        return a
    return x0, y0, x1, y1


def crop_scalp_frame(
    img: np.ndarray,
    bbox: tuple[int, int, int, int],
    ratio_w: int = 4,
    ratio_h: int = 5,
    *,
    crown_anchor: float = 0.26,
) -> np.ndarray:
    """4:5 crop anchored on crown (upper scalp), not geometric center of hair mass."""
    x0, y0, x1, y1 = bbox
    bw, bh = max(1, x1 - x0), max(1, y1 - y0)
    target = ratio_w / ratio_h

    crop_w = int(round(bw * 1.08))
    crop_h = int(round(crop_w / target))
    if crop_h < bh:
        crop_h = int(round(bh * 1.04))
        crop_w = int(round(crop_h * target))

    min_w = int(round(img.shape[1] * 0.78))
    if crop_w < min_w:
        crop_w = min(min_w, img.shape[1])
        crop_h = int(round(crop_w / target))

    cx = (x0 + x1) / 2
    anchor_y = y0 + int(bh * crown_anchor)
    top = int(round(anchor_y - crop_h * 0.22))
    left = int(round(cx - crop_w / 2))

    canvas = np.full((crop_h, crop_w, 3), 255, dtype=np.uint8)
    sl, st = max(0, left), max(0, top)
    dl, dt = max(0, -left), max(0, -top)
    cw = min(img.shape[1] - sl, crop_w - dl)
    ch = min(img.shape[0] - st, crop_h - dt)
    canvas[dt : dt + ch, dl : dl + cw] = img[st : st + ch, sl : sl + cw]
    return canvas


def similarity_warp(img: np.ndarray, cx: float, cy: float, angle: float, scale: float, dx: float, dy: float) -> np.ndarray:
    h, w = img.shape[:2]
    m = cv2.getRotationMatrix2D((cx, cy), angle, scale)
    m[0, 2] += dx
    m[1, 2] += dy
    return cv2.warpAffine(img, m, (w, h), flags=cv2.INTER_LINEAR, borderValue=(255, 255, 255))


def edge_score(reference: np.ndarray, moving: np.ndarray) -> float:
    g1 = cv2.GaussianBlur(cv2.cvtColor(reference, cv2.COLOR_BGR2GRAY), (3, 3), 0)
    g2 = cv2.GaussianBlur(cv2.cvtColor(moving, cv2.COLOR_BGR2GRAY), (3, 3), 0)
    e1 = cv2.Canny(g1, 50, 130)
    e2 = cv2.Canny(g2, 50, 130)
    valid = (e1 > 0) | (e2 > 0)
    if int(valid.sum()) < 500:
        return float("inf")
    return float(cv2.absdiff(e1, e2)[valid].mean())


def orb_similarity(moving: np.ndarray, reference: np.ndarray) -> np.ndarray:
    g_ref = cv2.cvtColor(reference, cv2.COLOR_BGR2GRAY)
    g_mov = cv2.cvtColor(moving, cv2.COLOR_BGR2GRAY)
    orb = cv2.ORB_create(nfeatures=10000, scaleFactor=1.15, nlevels=10)
    kp_ref, des_ref = orb.detectAndCompute(g_ref, None)
    kp_mov, des_mov = orb.detectAndCompute(g_mov, None)
    if des_ref is None or des_mov is None:
        return moving
    bf = cv2.BFMatcher(cv2.NORM_HAMMING)
    knn = bf.knnMatch(des_mov, des_ref, k=2)
    good = [m for m, n in knn if m.distance < 0.72 * n.distance]
    if len(good) < 12:
        return moving
    src = np.float32([kp_mov[m.queryIdx].pt for m in good]).reshape(-1, 1, 2)
    dst = np.float32([kp_ref[m.trainIdx].pt for m in good]).reshape(-1, 1, 2)
    matrix, inliers = cv2.estimateAffinePartial2D(
        src, dst, method=cv2.RANSAC, ransacReprojThreshold=4.5, maxIters=8000, confidence=0.995
    )
    if matrix is None or inliers is None or int(inliers.sum()) < 8:
        return moving
    h, w = reference.shape[:2]
    return cv2.warpAffine(moving, matrix, (w, h), flags=cv2.INTER_LINEAR, borderValue=(255, 255, 255))


def grid_search(reference: np.ndarray, moving: np.ndarray) -> np.ndarray:
    small_ref = cv2.resize(reference, (480, 600), interpolation=cv2.INTER_AREA)
    small_mov = cv2.resize(moving, (480, 600), interpolation=cv2.INTER_AREA)
    h, w = small_ref.shape[:2]
    cx, cy = w / 2, h / 2
    best = (0.0, 1.0, 0.0, 0.0)
    best_score = edge_score(small_ref, small_mov)

    def run(angles, scales, dx_range, dy_range):
        nonlocal best, best_score
        for angle in angles:
            for scale in scales:
                for dx in dx_range:
                    for dy in dy_range:
                        warped = similarity_warp(small_mov, cx, cy, angle, scale, dx, dy)
                        s = edge_score(small_ref, warped)
                        if s < best_score:
                            best_score = s
                            best = (angle, scale, dx, dy)

    run(range(-10, 11, 2), np.arange(0.92, 1.09, 0.03), range(-36, 37, 8), range(-36, 37, 8))
    angle, scale, dx, dy = best
    run(
        np.arange(angle - 2, angle + 2.1, 0.5),
        np.arange(scale - 0.04, scale + 0.041, 0.01),
        range(int(dx) - 8, int(dx) + 9, 2),
        range(int(dy) - 8, int(dy) + 9, 2),
    )
    angle, scale, dx, dy = best
    fh, fw = reference.shape[:2]
    return similarity_warp(moving, fw / 2, fh / 2, angle, scale, dx * 2, dy * 2)


def shared_content_crop(
    before: np.ndarray,
    after: np.ndarray,
    out_w: int,
    out_h: int,
    *,
    keep_top_pct: float = 0.68,
) -> tuple[np.ndarray, np.ndarray]:
    """Keep the upper scalp region; drop long hair below keep_top_pct of frame height."""
    h, w = before.shape[:2]
    keep_h = max(40, int(round(h * keep_top_pct)))

    g_b = cv2.cvtColor(before[:keep_h], cv2.COLOR_BGR2GRAY)
    g_a = cv2.cvtColor(after[:keep_h], cv2.COLOR_BGR2GRAY)
    valid = (g_b < 248) | (g_a < 248)
    coords = cv2.findNonZero(valid.astype(np.uint8) * 255)
    if coords is None:
        b = before[:keep_h]
        a = after[:keep_h]
    else:
        x, y, bw, bh = cv2.boundingRect(coords)
        pad = max(4, int(min(bw, bh) * 0.015))
        x0, y0 = max(0, x - pad), max(0, y - pad)
        x1, y1 = min(w, x + bw + pad), min(keep_h, y + bh + pad)
        b = before[y0:y1, x0:x1]
        a = after[y0:y1, x0:x1]

    return cv2.resize(b, (out_w, out_h), interpolation=cv2.INTER_AREA), cv2.resize(
        a, (out_w, out_h), interpolation=cv2.INTER_AREA
    )


def align_pair(
    before_path: Path,
    after_path: Path,
    out_before: Path,
    out_after: Path,
    *,
    out_w: int = 960,
    out_h: int = 1200,
    y_bottom_pct: float = 50.0,
    keep_top_pct: float = 0.68,
    debug_path: Path | None = None,
) -> dict:
    before_raw = load_bgr(before_path)
    after_raw = load_bgr(after_path)

    before_clinical = clinical_scalp_crop(before_raw)
    after_clinical = clinical_scalp_crop(after_raw)

    b_gray = cv2.cvtColor(before_clinical, cv2.COLOR_BGR2GRAY)
    a_gray = cv2.cvtColor(after_clinical, cv2.COLOR_BGR2GRAY)
    shared_bbox = merge_scalp_bboxes(
        scalp_focus_bbox(b_gray, y_bottom_pct=y_bottom_pct),
        scalp_focus_bbox(a_gray, y_bottom_pct=y_bottom_pct),
    )

    before_crop = crop_scalp_frame(before_clinical, shared_bbox)
    after_crop = crop_scalp_frame(after_clinical, shared_bbox)

    before = cv2.resize(before_crop, (out_w, out_h), interpolation=cv2.INTER_AREA)
    after = cv2.resize(after_crop, (out_w, out_h), interpolation=cv2.INTER_AREA)

    after = orb_similarity(after, before)
    after = grid_search(before, after)
    before, after = shared_content_crop(before, after, out_w, out_h, keep_top_pct=keep_top_pct)

    out_before.parent.mkdir(parents=True, exist_ok=True)
    out_after.parent.mkdir(parents=True, exist_ok=True)
    cv2.imwrite(str(out_before), before, [int(cv2.IMWRITE_JPEG_QUALITY), 92])
    cv2.imwrite(str(out_after), after, [int(cv2.IMWRITE_JPEG_QUALITY), 92])

    meta = {
        "before": {"width": out_w, "height": out_h},
        "after": {"width": out_w, "height": out_h},
        "shared_bbox": {"x0": shared_bbox[0], "y0": shared_bbox[1], "x1": shared_bbox[2], "y1": shared_bbox[3]},
        "y_bottom_pct": y_bottom_pct,
        "keep_top_pct": keep_top_pct,
    }

    if debug_path:
        blend = cv2.addWeighted(before, 0.5, after, 0.5, 0)
        debug_path.parent.mkdir(parents=True, exist_ok=True)
        cv2.imwrite(str(debug_path), blend, [int(cv2.IMWRITE_JPEG_QUALITY), 88])

    return meta


def main() -> int:
    parser = argparse.ArgumentParser(description="Align before/after treatment photos")
    parser.add_argument("--before", required=True, type=Path)
    parser.add_argument("--after", required=True, type=Path)
    parser.add_argument("--out-before", required=True, type=Path)
    parser.add_argument("--out-after", required=True, type=Path)
    parser.add_argument("--debug", type=Path, default=None)
    parser.add_argument("--width", type=int, default=960)
    parser.add_argument("--height", type=int, default=1200)
    parser.add_argument(
        "--y-bottom-pct",
        type=float,
        default=50.0,
        help="Percentile cut for long hair (lower = tighter crop, less hanging hair)",
    )
    parser.add_argument(
        "--keep-top-pct",
        type=float,
        default=0.68,
        help="After alignment, keep this fraction of frame height (crown focus, drop long hair)",
    )
    args = parser.parse_args()

    meta = align_pair(
        args.before,
        args.after,
        args.out_before,
        args.out_after,
        out_w=args.width,
        out_h=args.height,
        y_bottom_pct=args.y_bottom_pct,
        keep_top_pct=args.keep_top_pct,
        debug_path=args.debug,
    )
    print(json.dumps(meta, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
