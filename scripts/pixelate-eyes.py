#!/usr/bin/env python3
"""Pixelate eye regions in clinical before/after portraits."""

from __future__ import annotations

import argparse
from pathlib import Path

import cv2
import numpy as np


def pixelate_region(img: np.ndarray, x: int, y: int, w: int, h: int, blocks: int = 48) -> None:
	h_img, w_img = img.shape[:2]
	x = max(0, x)
	y = max(0, y)
	w = min(w, w_img - x)
	h = min(h, h_img - y)
	if w < 2 or h < 2:
		return
	roi = img[y : y + h, x : x + w]
	small = cv2.resize(
		roi,
		(max(1, w // blocks), max(1, h // blocks)),
		interpolation=cv2.INTER_AREA,
	)
	img[y : y + h, x : x + w] = cv2.resize(small, (w, h), interpolation=cv2.INTER_NEAREST)


def apply_regions(
	img: np.ndarray,
	regions: list[tuple[float, float, float, float]],
	blocks: int,
) -> None:
	h, w = img.shape[:2]
	for rx, ry, rw, rh in regions:
		pixelate_region(img, int(w * rx), int(h * ry), int(w * rw), int(h * rh), blocks=blocks)


# Normalized boxes (x, y, width, height) for frontal transplant portraits (960×1200).
TRANSPLANT_EYE_REGIONS = [
	(0.04, 0.74, 0.30, 0.17),
	(0.46, 0.74, 0.30, 0.17),
]

# Higher `blocks` → fewer tiles → larger pixel squares (~image_dim / (image_dim // blocks)).
TRANSPLANT_EYE_BLOCKS = 72


def process(path: Path, blocks: int, passes: int = 1) -> None:
	img = cv2.imread(str(path), cv2.IMREAD_COLOR)
	if img is None:
		raise FileNotFoundError(path)
	for _ in range(max(1, passes)):
		apply_regions(img, TRANSPLANT_EYE_REGIONS, blocks)
	cv2.imwrite(str(path), img, [int(cv2.IMWRITE_JPEG_QUALITY), 92])


def main() -> None:
	parser = argparse.ArgumentParser(description=__doc__)
	parser.add_argument("images", nargs="+", type=Path)
	parser.add_argument("--blocks", type=int, default=TRANSPLANT_EYE_BLOCKS)
	parser.add_argument("--passes", type=int, default=2, help="Re-apply pixelation for stronger anonymization")
	args = parser.parse_args()
	for image in args.images:
		process(image, args.blocks, args.passes)
		print(f"pixelated: {image}")


if __name__ == "__main__":
	main()
