# Earth Spiral - GitHub Pages Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

## Live Site
🌍 **[Visit Earth Spiral](https://yourusername.github.io/earth-spiral/)**

## Deployment
- **Automatic**: Every push to `main` branch triggers a new deployment
- **Manual**: Can be triggered manually from GitHub Actions tab
- **Build Time**: ~2-3 minutes
- **Hosting**: Free GitHub Pages

## Local Development
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm run preview
```

## Project Structure
```
earth-spiral/
├── .github/workflows/deploy.yml    # GitHub Pages deployment
├── src/                           # Source code
├── public/                        # Static assets
├── dist/                         # Build output (auto-generated)
└── README.md                     # This file
```

## Technologies
- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui components
- GitHub Pages for hosting

---

*Connecting people with Colorado's seasonal rhythms through local ecology and community.*