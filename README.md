# BoldCStudios

React + TypeScript + Tailwind CSS website built with Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This repository is configured to deploy automatically using GitHub Actions from the `main` branch.

- Workflow file: `.github/workflows/deploy.yml`
- Production base path is set via `VITE_BASE_PATH=/BoldCStudios/`

After pushing to `main`:

1. In GitHub, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Wait for the workflow to finish.
4. Site URL will be:

`https://<your-github-username>.github.io/BoldCStudios/`
