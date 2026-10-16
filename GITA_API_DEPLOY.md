# Deploy the Dynamic Gita Wisdom Image API

The profile README cannot execute JavaScript itself. This repository now includes a serverless SVG endpoint at `api/gita.svg.js`, which must be deployed to a serverless host before the README can embed it.

## Deploy free on Vercel

1. Open the Vercel import page: https://vercel.com/new
2. Sign in with GitHub and import `ADxSD-143/ADxSD-143`.
3. Keep the project root at the repository root. No environment variables or paid API keys are needed.
4. Deploy the project.
5. Test `https://YOUR-VERCEL-PROJECT.vercel.app/api/gita.svg` in a browser. It should display a dark SVG card with a randomly selected Gita verse.
6. Once the deployment URL is known, use that URL in the profile README as an image source.

## Important caching note

The endpoint sends no-cache headers and selects a verse per request, but GitHub may proxy/cache external images. Therefore, a new verse on every profile-page refresh cannot be guaranteed by GitHub itself. The endpoint can return a new verse whenever it receives a fresh request; the visible refresh behavior depends on GitHub's image cache.

## Health check

Open `https://YOUR-VERCEL-PROJECT.vercel.app/api/gita.svg/health` to check the service. (If the host routes this as a separate path, use the endpoint's response behavior to confirm deployment.)
