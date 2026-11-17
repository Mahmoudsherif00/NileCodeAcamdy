# Nile Code Academy

A premium, fully responsive educational website for **AI & Automation** programs —
a **Teens Track** and an **Adults Track** — built as a real, multi-page React
application with a functional design system.

![Stack](https://img.shields.io/badge/Vite-React-blue) ![License](https://img.shields.io/badge/license-private-lightgrey)

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Production:

```bash
npm run build      # outputs dist/
npm run preview    # serve the production build
```

## Pages & experiences

| Route            | Experience                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| `/`              | Home — hero with glowing AI network sphere, learning paths, learning roadmap, prompt before/after comparison, course roadmap preview, how-it-works, safe & responsible AI, final CTA |
| `/teens`         | Teens Track — hero, learning outcomes, 5-milestone roadmap, 8-item curriculum, pricing (3,000 EGP), final CTA |
| `/adults`        | Adults Track — hero, learning outcomes, 5-milestone roadmap, 10-item curriculum, pricing (4,500 EGP), final CTA |
| `/design-system` | Theme previews with **real** light/dark switching, live component showcase, mobile mockups |
| anything else    | 404 page                                                                    |

## Features

- **Dark / light theme** — real switching, persisted in `localStorage`, instant contrast-correct recolor of every component.
- **English / العربية** — full bilingual dictionaries (`src/i18n/translations.js`), RTL layout with logical CSS properties, Cairo font for Arabic, persisted preference.
- **Responsive** — tuned at 1536 / 1280 / 1024 / 768 / 390 / 375 px; mobile hamburger navigation; no horizontal overflow.
- **Floating WhatsApp CTA** — site-wide, with track-specific prefilled enrollment messages from each pricing card.
- **Purposeful motion** — scroll reveals (IntersectionObserver), floating illustrations, glow pulses; everything respects `prefers-reduced-motion`.
- **No dead buttons** — every CTA navigates or opens a real WhatsApp conversation.

## Architecture

```
src/
  assets/images/        hand-crafted SVG illustrations (shared art direction)
  components/
    common/             Navbar, Footer, Button, Logo, toggles, WhatsApp, Reveal
    layout/             Container, Section, PageLayout (nav + outlet + footer)
    home/               Hero, LearningPaths, WhatYouLearn, PromptComparison,
                        CourseRoadmapPreview, HowItWorks, SafetySection, FinalCta
    track/              shared Teens/Adults blocks: TrackHero, OutcomesGrid,
                        Roadmap, Curriculum, PricingCard, TrackCTA
    design-system/      ColorThemePreview, ComponentShowcase, MobilePreview
  context/              ThemeContext, LanguageContext (localStorage-backed)
  data/                 site config (WhatsApp number), nav, track + path data
  i18n/translations.js  every visible string in English + العربية
  pages/                HomePage, TeensPage, AdultsPage, DesignSystemPage, NotFoundPage
  styles/               variables (tokens), global, typography, animations, responsive
scripts/
  generate-sphere.mjs   deterministic generator for the hero neural sphere
```

### Content maintenance

- **Curriculum / outcomes / roadmap text**: edit `src/i18n/translations.js`
  (both `en` and `ar` trees stay in sync).
- **Prices, icons, item order**: `src/data/teensData.js` / `adultsData.js`.
- **WhatsApp number**: single value in `src/data/siteConfig.js`
  (`whatsappNumber`, international format, digits only) — set the real
  number before deploying.

## Asset note

The image-generation service was unavailable in the build environment
(credential failure), so all illustrations are **hand-crafted SVGs** in a
single consistent art direction (deep-navy `#020B18` scenes, electric-blue
`#008CFF` / cyan `#00D9FF` neon, glow filters, particles). SVGs are
resolution-independent and add ~1–3 KB each. The hero neural sphere is
generated mathematically by `scripts/generate-sphere.mjs` (deterministic,
re-runnable). If photoreal 3D renders are preferred later, drop replacement
files into `src/assets/images/` with the same names — no code changes needed.

## Dependencies

Runtime: `react`, `react-dom`, `react-router-dom`, `lucide-react`.
Build: `vite`, `@vitejs/plugin-react`. No UI framework, no CSS libraries.
