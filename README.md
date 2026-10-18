# WBuilds Website Redesign

This workspace contains the modern static website redesign for **WBuilds** (Minecraft Building Guide), built with **Astro 5**, **TypeScript**, and a custom **Design System** based on centralized CSS custom properties.

## Project Structure

```
Workspace/
├── public/                 # Static public files (favicons, robots.txt)
├── src/
│   ├── assets/             # Build covers, app mockups, brand icons
│   ├── components/         # Reusable UI, cards, layout, and section components
│   ├── content/            # Zod-validated Markdown/JSON collections
│   ├── content.config.ts   # Astro 5 Content Layer configuration
│   ├── data/               # Navigation, site metadata, and pricing dictionaries
│   ├── layouts/            # BaseLayout and LegalLayout templates
│   ├── pages/              # 13 routes matching legacy URLs
│   ├── scripts/            # Shared browser interactions (drawer, accordions)
│   └── styles/             # Design System: tokens.css, reset.css, typography.css
└── astro.config.mjs        # Astro configuration
```

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
