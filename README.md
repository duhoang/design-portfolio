# duhoang-portfolio

Du Hoang's personal portfolio site, rebuilt as a React app (Vite + React Router +
TypeScript). It's a port of the hand-written Jekyll site at `duhoang.github.io` —
same content, same design, client-side routing between the home page and the
portfolio case studies.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs static site to dist/ (also copies index.html -> 404.html for SPA routing)
npm run preview  # serve the production build locally
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/ai-side-projects` | Alternate home with AI side-projects sidebar |
| `/work/unity-xr` | Unity XR |
| `/work/unity-ar-companion` | Unity AR Companion |
| `/work/avatour` | Avatour |
| `/work/copilot` | Copilot AI |
| `/work/mapd` | MapD |

## Deploy

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on
push to `main`. After creating the GitHub repo, set **Settings → Pages → Source**
to **GitHub Actions**. The custom domain (`duhoang.com`) is carried by
`public/CNAME`.
