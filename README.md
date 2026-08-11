# ThinkRite Website

The marketing site for ThinkRite — a single-purpose writing device built to
protect a student's focus. Now built with [React](https://react.dev) and
[Vite](https://vite.dev).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

The static site is emitted to `dist/`, ready to deploy to any static host
(GitHub Pages, Netlify, Vercel, etc.).

## Project structure

```
index.html            Vite entry point (fonts + root div)
src/
  main.jsx            React bootstrap
  App.jsx             Page composition
  styles/global.css   All site styles (design tokens in :root)
  components/
    Nav.jsx           Sticky navigation bar
    Hero.jsx          Headline + interactive device mockup
    DeviceStage.jsx   The animated laptop (tabs, signal chip, lid open/close)
    AnalogScene.jsx   Pen-and-paper SVG shown when the lid is closed
    Problem.jsx       "School laptop vs ThinkRite" comparison
    Features.jsx      Feature grid
    HowItWorks.jsx    Three-step walkthrough
    Audience.jsx      For schools / for students cards
    SignupCta.jsx     Email signup form
    Footer.jsx        Footer
    Brand.jsx         Shared logo lockup
```
