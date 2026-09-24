# Globpave Construction website

Static marketing site for Globpave Construction, the pavers and paving specialists in Harare, Zimbabwe. It's built with [Astro](https://astro.build), so pages ship as plain HTML with almost no JavaScript.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start the dev server at http://localhost:4321 |
| `npm run build`   | Build the production site into `dist/`        |
| `npm run preview` | Serve the built site locally                  |
| `npm run check`   | Type-check the project                        |

## Where to edit things

- **Business details, services and keywords:** `src/data/site.ts`. Every page, the footer, the quote form and the structured data read from this file.
- **Pages:** `src/pages/`. Home, about, contact, the services index, one generated page per service category and the 404 page.
- **Styles and fonts:** `src/styles/global.css`. Fonts are self-hosted: Archivo for headings and Manrope for body text.
- **Social share image and icons:** after changing the logo or photo, run `node scripts/make-images.mjs`.

## SEO features

- A unique title, meta description, keywords and canonical URL on every page
- Open Graph and Twitter card tags with a 1200×630 share image
- JSON-LD structured data: `GeneralContractor` (LocalBusiness), `WebSite`, `Service`, `BreadcrumbList`, `FAQPage` and `ContactPage`
- `sitemap-index.xml` is generated automatically, and `robots.txt` points to it
- Semantic HTML, breadcrumbs, descriptive alt text, and WebP images that are resized at build time

## Deploying

Deploy the `dist/` folder to any static host, such as Netlify, Vercel, Cloudflare Pages or cPanel. The build command is `npm run build` and the output directory is `dist`. If the domain changes, update `site` in `astro.config.mjs` and `url` in `src/data/site.ts`.

After going live, submit `https://www.globpaveconstruction.co.zw/sitemap-index.xml` to Google Search Console and create a Google Business Profile at the same address.
