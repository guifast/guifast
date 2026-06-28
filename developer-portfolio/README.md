# Guilherme Fath Portfolio

Public portfolio for Guilherme Fath, a full-stack product engineer building SaaS products, business systems and AI integrations.

## Stack

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- `next/font`
- `next/image`
- ESLint
- Prettier
- Vitest
- Playwright smoke test

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Edit Personal Data

Centralized content lives in:

- `src/content/profile.ts`
- `src/content/projects.ts`
- `src/content/experience.ts`
- `src/content/stack.ts`

Before publishing, replace:

- `CONFIGURE_EMAIL`
- `CONFIGURE_LINKEDIN_URL`
- `NEXT_PUBLIC_SITE_URL` in production environment variables

## Add Screenshots

Project screenshot slots are under `public/projects/<project-slug>/`.

Expected names:

- `cover.svg` or `cover.png`
- `dashboard.svg` or `dashboard.png`
- `feature.svg` or `feature.png`
- `architecture.svg` or `architecture.png`
- `mobile.svg` or `mobile.png`

Recommended dimensions:

- Cover: `1600 x 1000`
- Feature: `1440 x 900`
- Mobile: `800 x 1600`
- Open Graph: `1200 x 630`

See `SCREENSHOTS.md` for replacement and sanitization guidance.

## Add Resume PDF

Place the resume at:

```text
public/guilherme-fath-resume.pdf
```

If the file does not exist, the site shows `PDF coming soon` instead of a broken download link.

## Environment Variables

Copy `.env.example` to `.env.local` for local configuration.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_POSTHOG_KEY=
```

Google Analytics is only loaded when `NEXT_PUBLIC_GA_ID` exists. `NEXT_PUBLIC_POSTHOG_KEY` is reserved for future analytics wiring and does not load tracking by default.

## Directory Structure

```text
src/app/                 App Router pages and metadata routes
src/components/          Reusable UI components
src/content/             Structured portfolio content
src/lib/                 Shared utilities
src/test/                Vitest setup
e2e/                     Playwright smoke tests
public/projects/         Project screenshot slots
```

## Deploy

### Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
4. Run the default Next.js build command: `npm run build`.

### Cloudflare Pages

This project is configured as a static Next.js export for Cloudflare Pages.

Set:

- Root directory: `developer-portfolio`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `22`
- Environment variable: `NEXT_PUBLIC_SITE_URL`

The Next.js config uses `output: "export"` and unoptimized images so Cloudflare can publish the static output directly.

## Pre-Deploy Checklist

- Configure email and LinkedIn URL.
- Add the production resume PDF or keep `PDF coming soon`.
- Replace SVG placeholders with sanitized screenshots.
- Set `NEXT_PUBLIC_SITE_URL` to the final domain.
- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run test`.
- Run `npm run build`.
- Review mobile layouts at `320`, `375`, `768`, `1024`, `1440` and `1920` widths.
- Confirm no private customer data appears in screenshots.
