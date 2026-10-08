// Prefixes root-relative links in dist/ with a sub-path, for previews hosted
// under one (e.g. GitHub Pages at /globpave/). Usage: node scripts/rebase-links.mjs /globpave
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) throw new Error('Pass a base path, e.g. /globpave');

const prefix = (p) => (p.startsWith(base + '/') || p.startsWith('//') ? p : base + p);

async function* files(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* files(p);
    else if (/\.(html|webmanifest)$/.test(e.name)) yield p;
  }
}

for await (const file of files('dist')) {
  let s = await readFile(file, 'utf8');
  s = s
    .replace(/\b(href|src|poster|action|data-[\w-]+)="(\/[^"]*)"/g, (_, a, p) => `${a}="${prefix(p)}"`)
    .replace(/\bsrcset="([^"]*)"/g, (_, v) => `srcset="${v.replace(/(^|,\s*)(\/\S+)/g, (m, sep, p) => sep + prefix(p))}"`)
    .replace(/"(start_url|src)":\s*"(\/[^"]*)"/g, (_, k, p) => `"${k}": "${prefix(p)}"`);
  await writeFile(file, s);
}
console.log(`Rebased links in dist/ to ${base}/`);
