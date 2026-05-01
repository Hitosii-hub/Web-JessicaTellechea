/**
 * Fail CI/local check if text files under src/ look like UTF-16 LE (NUL between ASCII chars).
 * Usage: node scripts/check-utf8.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SCAN = path.join(ROOT, 'src');
const SCAN_CONTENT = path.join(ROOT, 'src', 'content');

const EXT = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.css', '.json', '.md']);

function walk(dir, out = []) {
	for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, name.name);
		if (name.isDirectory()) walk(p, out);
		else if (EXT.has(path.extname(name.name))) out.push(p);
	}
	return out;
}

function looksUtf16LeAscii(buf) {
	if (buf.length < 40) return false;
	let nulOdd = 0;
	const lim = Math.min(buf.length, 80);
	for (let i = 1; i < lim; i += 2) {
		if (buf[i] === 0 && buf[i - 1] >= 0x20 && buf[i - 1] < 0x7f) nulOdd++;
	}
	return nulOdd >= 8;
}

let bad = 0;
const roots = [SCAN];
if (fs.existsSync(SCAN_CONTENT)) roots.push(SCAN_CONTENT);
for (const root of roots) {
	for (const file of walk(root)) {
		const buf = fs.readFileSync(file);
		if (looksUtf16LeAscii(buf)) {
			console.error('UTF-16 LE suspected:', path.relative(ROOT, file));
			bad++;
		}
	}
}

if (bad) {
	console.error(`check-utf8: ${bad} file(s) look UTF-16 LE. Save as UTF-8.`);
	process.exit(1);
}
console.log('check-utf8: OK');
