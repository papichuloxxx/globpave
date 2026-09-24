// Generates favicon PNGs and the Open Graph share image. Run: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const favicon = readFileSync('public/favicon.svg');
await sharp(favicon, { density: 600 }).resize(180, 180).flatten({ background: '#ffffff' }).png().toFile('public/apple-touch-icon.png');
await sharp(favicon, { density: 1200 }).resize(512, 512).png().toFile('public/logo.png');

const photo = await sharp('src/assets/driveway-paving.jpg').resize(520, 540, { fit: 'cover' }).toBuffer();
const photoRounded = await sharp(photo)
  .composite([{ input: Buffer.from('<svg width="520" height="540"><rect width="520" height="540" rx="28" fill="#fff"/></svg>'), blend: 'dest-in' }])
  .png()
  .toBuffer();

const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="1" cy="0" r="0.9"><stop offset="0" stop-color="#2563eb" stop-opacity=".55"/><stop offset="1" stop-color="#2563eb" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b1220"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(64 70)">
    <circle cx="26" cy="26" r="24" fill="#1d4fd8"/>
    <path d="M2 26h48M26 2c-7 7-10 15-10 24s3 17 10 24M26 2c7 7 10 15 10 24s-3 17-10 24M6 14h40M6 38h40" fill="none" stroke="#fff" stroke-width="2" opacity=".9"/>
    <text x="68" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="30" fill="#fff" letter-spacing="1">GLOBPAVE</text>
    <text x="68" y="50" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#8fb1ff" letter-spacing="5">CONSTRUCTION</text>
  </g>
  <text font-family="Arial, Helvetica, sans-serif" font-weight="800" fill="#fff" font-size="64">
    <tspan x="64" y="250">PAVING &amp;</tspan>
    <tspan x="64" y="324" fill="#5b8cff">CONSTRUCTION</tspan>
    <tspan x="64" y="398">IN HARARE</tspan>
  </text>
  <text x="64" y="460" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#c9d2e0">Driveways · Building · Civils · Roofing</text>
  <rect x="64" y="510" width="330" height="60" rx="30" fill="#1d4fd8"/>
  <text x="229" y="549" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="24" fill="#fff">+263 772 900 562</text>
</svg>`;

await sharp(Buffer.from(overlay))
  .composite([{ input: photoRounded, left: 630, top: 45 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og-image.jpg');

console.log('images generated');
