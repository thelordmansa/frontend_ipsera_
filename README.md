# Ipsera Frontend

This repository contains the front-end skeleton for the Ipsera SaaS application. It is built using Next.js with the App Router, TypeScript, and Tailwind CSS. The design is based on the SaasFly template and follows a dark theme with Ipsera branding.

## Getting Started

### Install dependencies

Run the following commands in the project root to install dependencies:

```bash
cd ipsera-frontend
npm install
```

### Environment variables

Create a `.env.local` file in the root of the project and define the following variables:

```
NEXT_PUBLIC_API_BASE=https://ipsera-backend-production.up.railway.app
NEXT_PUBLIC_BACKEND_API_KEY=<optional-api-key>
NEXT_PUBLIC_COMMIT_SHA=<commit-hash>
NEXT_PUBLIC_SENTRY_DSN=<sentry-dsn-or-empty>
```

The `NEXT_PUBLIC_API_BASE` should point to your deployed backend. The optional `NEXT_PUBLIC_BACKEND_API_KEY` will be included as an `x-api-key` header on requests if provided. The `NEXT_PUBLIC_COMMIT_SHA` is used to display the version in the footer. The Sentry DSN is optional and allows error reporting.

### Running the development server

After installing dependencies and configuring your environment variables, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can navigate between the landing page (`/`) and the application shell (`/app`).

## Project Structure

```
ipsera-frontend/
  app/
    page.tsx         – landing page with all sections
    layout.tsx       – root layout (imports globals)
    not-found.tsx    – custom 404
    error.tsx        – custom error page
    app/
      layout.tsx     – dashboard shell with sidebar and topbar
      page.tsx       – app home placeholder
      titles/page.tsx        – placeholder page for titles module
      descriptions/page.tsx  – placeholder page for descriptions module
      scripts/page.tsx       – placeholder page for scripts module
      thumbnails/page.tsx    – placeholder page for thumbnails module
    privacy/page.tsx – privacy policy placeholder
    terms/page.tsx   – terms of service placeholder
    status/page.tsx  – status page placeholder
  public/
    ipsera-logo.svg  – placeholder logo
    favicon.ico      – placeholder file (replace with your own)
  tailwind.config.ts – Tailwind configuration (dark mode enabled)
  postcss.config.js  – PostCSS configuration
  next.config.js     – Next.js configuration enabling experimental app directory
  tsconfig.json      – TypeScript configuration
  package.json       – dependencies and scripts
```

## API Contracts

The frontend does not implement API calls yet but expects the backend to expose the following endpoints:

| Method & Endpoint | Purpose | Expected Response |
| ---------------- | ------- | ----------------- |
| `POST /api/titles/generate` | Generate SEO‑optimized YouTube titles | `{ titles: string[] }` |
| `POST /api/descriptions/generate` | Generate viral video descriptions | `{ description: string, sections: Array<{ label: string, content: string }> }` |
| `POST /api/scripts/generate` | Generate engaging video scripts | `{ script: { title: string, beats: Array<{ name: string, text: string }>, cta: string } }` |
| `POST /api/thumbnails/generate` (multipart) | Start generation of AI thumbnails | `{ id: string }` |
| `GET /api/thumbnails/status/:id` | Check status of thumbnail generation | `{ status: 'pending' | 'succeeded' | 'failed', downloadUrl?: string, error?: string }` |
| `GET /api/thumbnails/download?url=…` | Download generated thumbnail | Binary image |
| `GET /healthz` | Backend health check | `200 OK` if backend is healthy |

### Transport Rules

The frontend will implement timeouts and retries in later phases:

* **Timeouts:** 15 seconds for JSON requests, 120 seconds for uploads.
* **Retries:** Up to 2 retries on 5xx or network errors; no retries on 4xx.
* **Error Mapping:**
  - `400` – input validation errors (fields included)
  - `401/403` – authentication required / invalid API key
  - `429` – rate limit exceeded (retry after indicated seconds)
  - `5xx` – server or network errors (display trace ID if provided)

## Notes

* This skeleton does not include any API calls, forms, or upload functionality. Those will be added in a later development phase.
* The landing page replicates the structure of the SaasFly template but removes all waitlist forms and calls-to-action. CTAs point to the `/app` route instead.
* Replace the logo and favicon in the `public/` directory with your own assets.
* Ensure you configure environment variables correctly in your deployment platform (e.g., Vercel) to avoid runtime errors.
