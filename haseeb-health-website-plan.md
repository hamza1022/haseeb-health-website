# Haseeb Health — Website Build Plan

## Goal
Lead-generation site for Coach Haseeb (fitness trainer, Lahore). Every section funnels
to one action: **message him on Instagram** (@haseeb_health_1). No e-commerce, no
booking system — just credibility + proof + a persistent CTA.

## Stack
- **Next.js 14 (App Router)** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion (Motion)** for scroll reveals, hero entrance, hover states
- Deploy target: **Vercel**, connected to the GitHub repo (`HASEEB_HEALTH`) for
  auto-deploy on push

## Video assets
All 18 clips are already converted to `.mp4` and live in `data/videos/`. From
these, pick the **4-6 strongest** for the actual Video Showcase section
(training clips, form demonstrations, most energetic moments) — don't put all
18 on the page, since more video weight means slower load times.

Before wiring them into the site, sanity-check file sizes:
```
cd data/videos && ls -lh
```
If any of the three `A001C0000*_EL53.mp4` files (converted from the
professional camera footage) are still large (tens of MB+), re-compress just
those with a lower bitrate before using them — e.g.
`ffmpeg -i A001C00007_260331_EL53.mp4 -vcodec h264 -crf 30 -vf scale=1080:-2 A001C00007_small.mp4`.
The `IMG_xxxx.mp4` phone clips are likely already reasonably sized.

Once the final 4-6 are chosen, move them into `/public/videos` in the Next.js
project (not the full set of 18).

## Asset → Section mapping (from your current repo: `HASEEB_HEALTH/data/`)
| Asset | Use |
|---|---|
| `main-logo.jpeg` | Navbar + favicon source |
| `60_days_challenge.jpeg` | Programs/Challenge section |
| `Back_training.jpeg` | Transformations or About section |
| `diet-plan.jpeg` | Nutrition/Programs section |
| `fat-loss-guide.jpeg` | Programs section |
| `services.jpeg` | Services section |
| `step-1.jpeg` / `step-2.jpeg` / `step-3.jpeg` | "How It Works" 3-step process |
| `transformation/` folder | Transformations gallery (before/after) |
| `videos/` folder (18 `.mp4` files) | Video Showcase — pick best 4-6, see below |

## Design tokens — dark mode + light mode
Client approved two palettes from the options shown: dark mode uses "Ember
gold" (matches the logo directly), light mode uses "Sunrise energy" (warm
cream, more approachable). Both share the same warm gold/terracotta accent
logic, so this is a surface swap, not two separate designs — implement as CSS
variables that flip on a `data-theme` attribute (or `next-themes`), not two
hardcoded component trees.

**Dark mode ("Ember gold")**
- `--bg-base`: `#0D0B0A` (near-black, warm not cold)
- `--bg-elevated`: `#171412` (card/section backgrounds)
- `--accent`: `#D4A94A` (gold — headings, primary CTA text/border)
- `--ember-start`: `#E8446B` / `--ember-end`: `#F2872E` (gradient — signature
  element only: primary CTA fill or a glow behind the hero photo)
- `--text-primary`: `#F3EEE6`
- `--text-muted`: `#9C948A`

**Light mode ("Sunrise energy")**
- `--bg-base`: `#FAF6EF` (warm cream)
- `--bg-elevated`: `#F2ECDF` (card/section backgrounds)
- `--accent`: `#B24A1F` (terracotta — headings, primary CTA fill)
- `--accent-warm`: `#E8A23A` (secondary accent, sparingly)
- `--text-primary`: `#201A12`
- `--text-muted`: `#6B6152`

Default to dark mode on first load (matches his existing Instagram brand
presentation), with a toggle in the nav. Respect `prefers-color-scheme` as the
initial guess, but let the manual toggle override and persist (localStorage
is fine here since it's a simple UI preference, not app data).

Use the gradient/warm-accent sparingly and deliberately — the signature
element (primary CTA, or a glow behind the hero photo) — not scattered
everywhere. The accent color carries most of the UI on its own.

Typography: a condensed, bold display face for headlines (athletic, not
corporate — something like a strong grotesk), paired with a clean readable
body face. Avoid default system-serif or the generic Inter-everywhere look.

## Site structure
1. **Hero** — his photo, headline built around "Fat Loss, Muscle Gain &
   Nutrition Expert," CPD UK Certified badge, primary CTA button
2. **About** — credentials, story, athlete background
3. **Transformations** — gallery grid, before/after
4. **How It Works** — step-1/2/3 images as a 3-step process
5. **Programs** — 60 days challenge, fat loss guide, diet plan (cards)
6. **Video Showcase** — 3-4 converted clips, autoplay-muted-loop or click-to-play
7. **Client Results** — testimonials (pending the photos you'll send)
8. **Sticky CTA bar** — persistent "Message on Instagram" button on scroll

## Build order (for Claude Code)
1. Scaffold Next.js + Tailwind + TypeScript project, add Framer Motion
2. Set up design tokens in `tailwind.config.ts` for both palettes above, wired
   to a `data-theme` attribute; add a dark/light toggle (default dark)
3. Build layout shell (navbar with logo + theme toggle, sticky CTA, footer)
4. Build Hero section
5. Build About + How It Works
6. Build Transformations gallery + Programs cards
7. Build Video Showcase (pick final 4-6 clips from `data/videos/`, move to
   `/public/videos`)
8. Build Testimonials section (placeholder until real content arrives)
9. Responsive pass (mobile-first check), reduced-motion support
10. Push to GitHub → connect to Vercel → verify live preview
