# Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

## Deploy on Netlify

## Contact Form on Cloudflare Workers

olivia-contact-form requires a POST request with `name`, `email` and `message`.
It also sends an email.

```bash
cd functions
wrangler dev src/index.ts # run dev
wrangler publish
```

TODO: refactor function and read env variables.

## Lint

```bash
npm run lint
```
