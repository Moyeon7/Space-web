# Deployment Guide

## Live Site
**Production URL:** https://sakshi-space-web.netlify.app

## Prerequisites
- Node.js and npm installed
- Netlify CLI: `npm install -g netlify-cli`
- Netlify account (already authenticated)

## Local Development

```bash
npm install
npm start
```

The app will run on `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deploy to Netlify

### Option 1: CLI Deploy (Recommended for local machine)

```bash
npm run build
netlify deploy --prod --dir=build
```

First time only:
```bash
netlify login
netlify deploy --create-site <site-name> --dir=build --prod
```

### Option 2: GitHub Integration (Recommended for CI/CD)

1. Push your repo to GitHub
2. In Netlify dashboard: New site → Import from Git → Select your repo
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy

## Important Files

- **`public/_redirects`**: Enables client-side routing for the React SPA
  - Maps all routes to `index.html` so React Router works properly
  - Do not remove or modify

## Environment Variables

If needed, add environment variables in Netlify:
1. Site Settings → Build & deploy → Environment
2. Add key-value pairs
3. Access in code via `process.env.REACT_APP_*`

## Troubleshooting

- **Build fails**: Check that `npm run build` works locally first
- **Routing issues**: Ensure `_redirects` file exists in `public/`
- **Pages not loading**: Clear browser cache and Netlify cache in Site Settings

## Resources

- [Netlify CLI Docs](https://docs.netlify.com/cli/overview/)
- [Create React App Deployment](https://cra.link/deployment)
