# Sneha Naidu Gade, MD

Professional portfolio for Dr. Sneha Naidu Gade, a board-certified pediatrician
in Phoenix, Arizona.

The site presents her clinical practice, pediatric cardiology interests,
training, quality-improvement work, and publications in a responsive,
accessible one-page experience.

## Development

Requirements:

- Node.js 22.13 or newer
- npm

Run locally:

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run lint
npm test
```

## Structure

- `app/page.tsx` - page content and semantic structure
- `app/globals.css` - visual system and responsive layout
- `app/layout.tsx` - metadata, typography, and document shell
- `public/` - favicon and original hero artwork

The production deployment is built from this repository through OpenAI Sites.
The canonical domain is `snehagade.com`.
