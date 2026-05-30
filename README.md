# Touch Design

## Touchless Commerce: The Future of Interactive Shopping

Gesture Brand Market is a touchless shopping prototype where users can browse fashion products, add items to a cart, wishlist pieces, and start checkout with hand gestures instead of touching the screen.

Repository: [ade-gb/touch-design-](https://github.com/ade-gb/touch-design-)

## Concept

Touchless Commerce is a futuristic ecommerce experience that allows users to browse, interact with, and purchase products entirely through hand gestures and motion controls, removing the need for physical touch.

The app turns the camera into an interactive shopping controller. A user's hand acts like a cursor: hover over a gesture zone, hold to select, or swipe across the product stage to move between items. The UI keeps a retro 98.css-inspired desktop style while the transparent camera layer lets users see themselves behind the shopping interface.

Designed for fashion brands, luxury retail, tech exhibitions, smart stores, and future-focused digital experiences, Touchless Commerce explores how ecommerce can evolve beyond traditional screens into a more natural, immersive shopping experience.

## Features

- Camera-based hand tracking with MediaPipe Tasks Vision.
- Pointer mode fallback for testing without camera access.
- Transparent live-camera background so the shopper can see themselves.
- Hold-to-select gesture zones with a visible hover progress ring.
- Swipe left and right between products.
- Product turntable rotation animation.
- Five brand sections with real product images and pricing.
- Brand rail navigation.
- Size variant selection.
- Wishlist action.
- Cart, grouped multi-currency totals, and checkout confirmation.
- 98.css-inspired visual design with beveled windows, title bars, and classic buttons.
- Responsive layout for desktop and mobile screens.

## Tech Stack

- HTML
- CSS with a custom 98.css-inspired interface
- TypeScript
- JavaScript ES modules
- MediaPipe Tasks Vision
- Browser Camera API / `getUserMedia`
- Local static server via Python `http.server`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local preview:

```bash
npm run dev
```

Open:

```text
http://localhost:5173/
```

Type-check the TypeScript source:

```bash
npm run check
```

## Camera Setup

Camera mode only works from a secure browser context. Use `localhost` or HTTPS, not `file://`.

1. Start the local server with `npm run dev`.
2. Open `http://localhost:5173/`.
3. Press the `Camera` button.
4. Allow camera permission in the browser.
5. Keep your hand visible in front of the camera.

If permission is blocked, click the camera or lock icon in the browser address bar, allow camera access for the site, reload, then press `Camera` again.

MediaPipe is loaded from a CDN, so hand tracking needs an internet connection the first time it loads.

## Controls

| Action | Gesture / Pointer Behavior |
| --- | --- |
| Browse next | Swipe left, or hold the `Next` zone |
| Browse previous | Swipe right, or hold the `Previous` zone |
| Wishlist | Hold the top `Wishlist` zone |
| Add to cart | Hold the bottom `Add to cart` zone |
| Checkout | Hold the bottom-right `Checkout` zone |
| Select brand | Click a brand in the side rail |
| Select size | Click a size variant button |

Pointer mode uses the mouse or trackpad with the same hover-and-hold behavior, which is useful for demos and debugging.

## Product Catalog

### Highfashion

| Product | Category | Price | Asset |
| --- | --- | --- | --- |
| HF Black Track Set | Tracksuit | $286.96 USD | `assets/highfashion-black-tracksuit.jpg` |
| HF Blue Denim Set | Denim set | $956.53 USD | `assets/highfashion-blue-denim-set.jpg` |
| HF Ice Track Set | Tracksuit | $286.96 USD | `assets/highfashion-ice-track-set.jpg` |
| HF Distressed Knit | Knitwear | $239.13 USD | `assets/highfashion-distressed-knit.jpg` |

### Outterspace Luxury

| Product | Category | Price | Asset |
| --- | --- | --- | --- |
| Outterspace Floral Zip Shirt | Zip shirt | ₦313,600.00 NGN | `assets/outterspace-black-zip-shirt.png` |
| Outterspace Portrait Set | Set | ₦272,000.00 NGN | `assets/outterspace-portrait-set.png` |
| Mr Crab Plaid Set | Set | ₦302,400.00 NGN | `assets/outterspace-lobster-plaid-set.png` |
| Pink Mr Crab Layer Shirt | Shirt | ₦155,000.00 NGN | `assets/outterspace-pink-crab-shirt.png` |

### YLCollectives

| Product | Category | Price | Asset |
| --- | --- | --- | --- |
| YL Studios Rugby | Rugby top | ₦420,000.00 NGN | `assets/ylcollectives-studios-rugby.webp` |
| YL Cream Crewneck | Sweatshirt | ₦300,000.00 NGN | `assets/ylcollectives-cream-crewneck.png` |
| YL Varsity Jacket | Outerwear | ₦750,000.00 NGN | `assets/ylcollectives-varsity-jacket.png` |
| YL Flame Cap | Headwear | ₦208,500.00 NGN | `assets/ylcollectives-flame-cap.png` |

### ZTTWCollective

| Product | Category | Price | Asset |
| --- | --- | --- | --- |
| ZTTW Ambitions Sleeveless Tee | Sleeveless tee | ₦240,000.00 NGN | `assets/zttw-ambitions-sleeveless.webp` |
| ZTTW Pattern Long Sleeve | Long sleeve | ₦375,000.00 NGN | `assets/zttw-pattern-long-sleeve.webp` |
| ZTTW 26 Patch Polo | Polo | ₦405,000.00 NGN | `assets/zttw-26-polo.webp` |
| ZTTW Blue Varsity Jacket | Outerwear | ₦720,000.00 NGN | `assets/zttw-blue-varsity-jacket.webp` |

### GoCrazy

| Product | Category | Price | Asset |
| --- | --- | --- | --- |
| Jalamia | Robe | ₦450,000.00 NGN | `assets/gocrazy-jalamia.webp` |
| BOMBE À PAILLETTE LEATHER JACKET | Leather jacket | ₦1,120,000.00 NGN | `assets/gocrazy-bombe-paillette-leather-jacket.webp` |
| OPIUM SPANDEX U6 | Spandex top | ₦320,000.00 NGN | `assets/gocrazy-opium-spandex-u6.webp` |
| KINGS MASCOT DENIM JORTS | Denim jorts | ₦640,000.00 NGN | `assets/gocrazy-kings-mascot-denim-jorts.webp` |

## Project Structure

```text
.
├── assets/          # Product images and earlier placeholder assets
├── index.html       # App markup
├── script.js        # Browser-ready application logic
├── src/main.ts      # TypeScript source version of the app logic
├── styles.css       # 98.css-inspired styling and responsive layout
├── package.json     # Scripts and TypeScript dependency
└── tsconfig.json    # TypeScript configuration
```

## Implementation Notes

- Product data is currently duplicated in `script.js` and `src/main.ts`.
- `script.js` is loaded directly by `index.html` for the static browser preview.
- `src/main.ts` is kept as the typed source reference and is checked with `tsc --noEmit`.
- Cart totals are grouped by currency, so USD and NGN totals are not mixed into one number.
- Checkout is a front-end prototype state, not a live payment integration.
- The camera feed sits behind the UI and becomes fully visible when camera mode is live.

## Troubleshooting

### Camera is blocked

Allow camera permission from the browser address bar, reload, and press `Camera` again. Also check system privacy settings if the browser itself is blocked from using the camera.

### Hand tracking does not load

Make sure the device has internet access. MediaPipe Tasks Vision and the hand landmark model are loaded from CDN URLs.

### Nothing happens when hovering

Use `Pointer` mode and move the mouse into a gesture zone. Hold until the progress ring completes. In camera mode, keep your index finger visible and move slowly into a zone.

### The page was opened as a file

Camera access will not work reliably from `file://`. Run `npm run dev` and open `http://localhost:5173/`.

## Current Status

This is a front-end prototype for a futuristic, touchless shopping experience. It demonstrates gesture navigation, product browsing, cart flow, transparent camera background, and a multi-brand catalog.
