# FIT5122 Own-time Study Hub

Bilingual FIT5122 study guides built with React, Vite, TanStack Router, Tailwind CSS, shadcn/ui, GSAP, and i18next.

- `/week/01`–`/week/06`: published Own-time summaries.
- `/chapter/01`: Week 01 exam priorities and practice questions.
- `/chapter/02`: Week 02–04 exam priorities and practice questions.
- `/chapter/03`: reserved for the unfinished Week 05–06 exam material.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test:run
npm run build
npm run deploy:dry-run
npm run deploy
```

The root route redirects to `/week/06`. Localised URLs use `?lang=zh` or `?lang=en`; the selected language is also persisted locally.

## Deployment

The Cloudflare Vite plugin builds the SPA as Workers Static Assets. `wrangler.jsonc` targets the existing `fit5122-week06-quality` Worker and `fit5122.xsun.work` custom domain in the Alex account.
