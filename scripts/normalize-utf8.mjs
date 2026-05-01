/**
 * Convert UTF-16 LE files under src/ to UTF-8 (LF). Detects LE via NUL-spacing heuristic.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SCAN = path.join(ROOT, 'src');

const EXT = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.css']);

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
	const lim = Math.min(buf.length, 120);
	for (let i = 1; i < lim; i += 2) {
		if (buf[i] === 0 && buf[i - 1] >= 0x20 && buf[i - 1] < 0x7f) nulOdd++;
	}
	return nulOdd >= 8;
}

let fixed = 0;
for (const file of walk(SCAN)) {
	let buf = fs.readFileSync(file);
	if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) {
		buf = buf.subarray(2);
	}
	if (!looksUtf16LeAscii(buf)) continue;
	const text = buf.toString('utf16le').replace(/\r\n/g, '\n');
	fs.writeFileSync(file, text.endsWith('\n') ? text : `${text}\n`, 'utf8');
	console.log('normalized:', path.relative(ROOT, file));
	fixed++;
}
console.log(`normalize-utf8: ${fixed} file(s) converted`);
