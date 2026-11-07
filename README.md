# 🧠 Brainwave — AI Chat App Landing Page

![Status](https://img.shields.io/badge/Status-In%20Development-AC6AFF?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Brainwave is a dark-themed, single-page landing site for a fictional AI chat product, built with React 19, Vite 8 and Tailwind CSS 4. It walks visitors through a hero showcase, feature cards, app integrations, services, pricing tiers and a product roadmap. Scroll-triggered reveals, parallax effects and a live scroll-progress bar animate the page as you move through it.

---

## ✨ Features

- **Sticky, blurred header:** A fixed navigation bar slides in on load, links to each section by anchor, and highlights the active link based on the URL hash.
- **Mobile navigation overlay:** Below the `lg` breakpoint a hamburger button opens a full-screen menu with decorative rings. Page scrolling is locked while it is open and unlocked when a link is chosen or the menu closes.
- **Hero showcase:** A headline with an underline curve, a "Get started" call to action, and a framed robot image with an "AI is generating" pill.
- **Parallax effects:** A floating toolbar and a "Code generation" notification card move with scroll (`ScrollParallax`), and coloured orbs around the hero rings follow the mouse (`MouseParallax`).
- **Benefit cards:** Six cards ("Ask anything", "Improve everyday", "Connect everywhere", "Fast responding") with custom SVG backgrounds, an SVG clip-path shape, optional gradient glow and a hover image overlay.
- **Collaboration orbit:** A circular layout of 8 integration icons (Figma, Notion, Discord, Slack, Photoshop, Protopie, Framer, Raindrop) around the Brainwave logo, next to a checklist of collaboration benefits.
- **Services showcase:** "Smartest AI", "Photo editing" and "Video generation" panels with mock chat bubbles, a video progress bar and a row of tool icons.
- **Pricing tiers:** Basic ($0), Premium ($9.99) and Enterprise (contact via `mailto:`) cards, each with its own feature list and accent colour.
- **Product roadmap:** Four roadmap cards with date taglines and "Done" / "In progress" status badges, laid out in a staggered two-column grid.
- **Scroll progress bar:** A thin gradient bar fixed to the top of the viewport that fills as you scroll.
- **Scroll reveal animations:** Sections and list items fade, slide or zoom in with staggered delays as they enter the viewport.
- **Reduced-motion support:** Reveal animations, the header entrance and smooth scrolling are turned off when the OS requests reduced motion.
- **Themed scrollbar and selection:** A gradient scrollbar thumb and a purple text selection colour that match the brand palette, with a Firefox fallback.
- **Footer:** A copyright line with the current year and round social links (Discord, Twitter, Instagram, Telegram, Facebook).

---

## 🛠️ Tech Stack

- **UI library:** React 19 (`react`, `react-dom` ^19.3.1)
- **Build tool and dev server:** Vite 8 (`vite` ^8.3.4) with `@vitejs/plugin-react` ^6.1.2
- **Styling:** Tailwind CSS 4 (`tailwindcss` ^4.3.3) through the `@tailwindcss/vite` ^4.3.3 plugin, with CSS-first `@theme` configuration
- **Routing / location:** React Router 7 (`react-router-dom` ^7.18.4), using `BrowserRouter` and `useLocation`
- **Parallax:** `react-just-parallax` ^3.1.16 (`ScrollParallax`, `MouseParallax`)
- **Scroll locking:** `scroll-lock` ^2.1.5
- **Linting:** ESLint 10 (`eslint` ^10.13.0, `@eslint/js` ^10.0.1) with `eslint-plugin-react-hooks` ^7.1.1, `eslint-plugin-react-refresh` ^0.5.7 and `globals` ^17.13.0
- **Typography:** Google Fonts: Sora (body), Source Code Pro (buttons and code-style labels), Space Grotesk (taglines)

---

## 🧩 Engineering Highlights

- **Reusable `<Reveal>` component:** A polymorphic wrapper (`as="li"`, `as="h2"`, and so on) that uses one `IntersectionObserver` per element (`threshold: 0.15`, bottom `rootMargin: -8%`). It supports six variants (`up`, `down`, `left`, `right`, `zoom`, `fade`). Stagger delays are passed through a `--reveal-delay` CSS custom property, so React doesn't need timers. With `once` set, the observer disconnects after the first reveal. Content renders as visible when `IntersectionObserver` isn't available.
- **Re-render-free scroll progress:** `ScrollProgress` throttles scroll and resize events with `requestAnimationFrame`, registers a `passive` scroll listener, and writes `transform: scaleX()` straight to a DOM ref. No React state changes while scrolling, and the bar animates with a GPU-friendly transform (`will-change: transform`).
- **Accessibility-minded motion:** A `prefers-reduced-motion: reduce` media query turns off reveal transitions, the header entrance animation and `scroll-behavior: smooth`.
- **Tailwind v4 CSS-first design tokens:** All colours (`color-1…6`, neutrals `n-1…13`, `stroke-1`), fonts, tracking, z-index steps and gradients (`radial-gradient`, `conic-gradient`) live in an `@theme` block in `src/index.css`. There is no `tailwind.config.js`. Typography classes (`.h1`–`.h6`, `.body-1`, `.body-2`, `.tagline`, `.button`, and others) and a responsive `.container` are defined once in `@layer components`.
- **Explicit utilities for dynamic class names:** The collaboration orbit builds class names at runtime (`rotate-${index * 45}`). Tailwind can't detect those, so `rotate-45` through `rotate-360` and their negatives are declared in `@layer utilities` to guarantee they exist.
- **Shared SVG gradient definitions:** `<ButtonGradient />` renders the `btn-left/top/bottom/right` linear gradients once at the app root. Every `<Button>` references them with `url(#…)` for its gradient border, so the markup isn't duplicated. `<ClipPath />` defines an `objectBoundingBox` clip path that gives each benefit card its notched shape at any size.
- **Data-driven content:** Navigation, pricing, roadmap, benefits, integrations, services and socials are plain arrays in `src/constants/index.js`, and components map over them. A single asset barrel (`src/assets/index.js`) centralises every image import.
- **Composable layout primitives:** `<Section>` adds consistent vertical padding plus optional decorative grid lines and "plus" crosses. `<Heading>` combines tagline, title and text with built-in reveals. `<Button>` renders an `<a>` when given `href` and a `<button>` otherwise.
- **Mobile menu scroll locking:** `scroll-lock`'s `disablePageScroll` / `enablePageScroll` are paired with the menu's open state, so the page behind the overlay can't scroll.
- **Scoped parallax:** `MouseParallax` is bound to the hero container through `parallaxContainerRef`, so the orbs only react to the pointer inside that area. A `mounted` flag fades the orbs in after the first render.

---

## 📁 Folder Structure

```
BRAINWARE/
├── public/
│   ├── favicon.svg              # Default favicon asset
│   └── icons.svg                # Static SVG icon sprite
├── src/
│   ├── assets/
│   │   ├── benefits/            # Benefit card backgrounds, icons and hover image
│   │   ├── collaboration/       # Integration app icons and orbit curves
│   │   ├── hero/                # Hero robot image, background and underline curve
│   │   ├── notification/        # Avatar images for the notification card
│   │   ├── pricing/             # Decorative lines and stars
│   │   ├── roadmap/             # Roadmap card images and status icons
│   │   ├── services/            # Service showcase images
│   │   ├── socials/             # Footer social icons
│   │   ├── svg/                 # SVG-as-JSX components (button frame, gradients, clip path, menu, plus, brackets)
│   │   ├── *.svg / *.png / *.jpg  # Logo, UI icons, gradients, grid and background images
│   │   └── index.js             # Barrel file exporting every asset
│   ├── components/
│   │   ├── design/              # Decorative sub-components per section (gradients, rings, curves, chat bubbles)
│   │   ├── Benefits.jsx         # Feature cards grid
│   │   ├── Button.jsx           # Gradient-framed button / link
│   │   ├── Collaboration.jsx    # Integration orbit and benefits checklist
│   │   ├── CompanyLogos.jsx     # "Helping people create…" logo row
│   │   ├── Footer.jsx           # Copyright and social links
│   │   ├── Generating.jsx       # "AI is generating" pill
│   │   ├── Header.jsx           # Fixed nav bar and mobile menu
│   │   ├── Heading.jsx          # Section tagline, title and text
│   │   ├── Hero.jsx             # Hero section with parallax elements
│   │   ├── Notification.jsx     # Floating notification card
│   │   ├── Pricing.jsx          # Pricing section wrapper
│   │   ├── PricingList.jsx      # Pricing tier cards
│   │   ├── Reveal.jsx           # IntersectionObserver scroll-reveal wrapper
│   │   ├── Roadmap.jsx          # Roadmap cards grid
│   │   ├── ScrollProgress.jsx   # Top-of-page scroll progress bar
│   │   ├── Section.jsx          # Section wrapper with decorative lines
│   │   ├── Services.jsx         # Services showcase panels
│   │   └── Tagline.jsx          # Bracketed tagline label
│   ├── constants/
│   │   └── index.js             # All page content data (nav, pricing, roadmap, etc.)
│   ├── App.jsx                  # Page composition, section order
│   ├── index.css                # Tailwind import, @theme tokens, components, animations, scrollbar
│   └── main.jsx                 # React root with StrictMode and BrowserRouter
├── .gitignore                   # Ignored files (node_modules, dist, editor folders, etc.)
├── eslint.config.js             # ESLint flat config (React Hooks + React Refresh)
├── index.html                   # HTML entry point
├── package.json                 # Scripts and dependencies
├── package-lock.json            # Locked dependency versions
└── vite.config.js               # Vite config with React and Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** (bundled with Node.js)
- **Git**

### Installation

1. Clone the repository:

```bash
git clone https://github.com/K01J10W19/BRAINWARE.git
```

2. Move into the project folder:

```bash
cd BRAINWARE
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server (defaults to http://localhost:5173):

```bash
npm run dev
```

5. Create a production build in `dist/`:

```bash
npm run build
```

6. Preview the production build locally:

```bash
npm run preview
```

Optionally, lint the codebase:

```bash
npm run lint
```

---

## 📱 Responsive Strategy

The project is mobile-first and uses Tailwind's default breakpoints. No custom breakpoints are defined.

| Breakpoint | Min width |
| ---------- | --------- |
| `sm`       | 640px     |
| `md`       | 768px     |
| `lg`       | 1024px    |
| `xl`       | 1280px    |

**Global**

- `.container` padding grows from `px-5` → `md:px-10` → `lg:px-15`, and its max width grows from `77.5rem` to `87.5rem` at `xl`.
- Typography classes (`.h1`, `.h2`, `.body-1`, `.body-2`, `.h3`) step up their font size and line height at `md`, `lg` and `xl`.
- `<Section>` vertical padding goes `py-10` → `lg:py-16` → `xl:py-20` (`lg:py-32` / `xl:py-40` for sections with crosses). The vertical side lines appear from `md`, and the horizontal lines with "plus" crosses appear from `lg`.
- Top page offset for the fixed header: `pt-[4.75rem]`, then `lg:pt-[5.25rem]`.

**Header**

- **Below `lg`:** Logo plus hamburger button. The nav opens as a full-screen overlay with large `text-2xl` links and includes the mobile-only "New account" and "Sign in" items.
- **`lg` and up:** Inline nav links (`text-xs`) centred in the bar, a separate "New account" link and a "Sign in" button. The hamburger and mobile-only items are hidden.

**Section layouts**

- **Hero:** The robot frame's aspect ratio changes from `33/40` → `md:688/490` → `lg:1024/490`. The "AI is generating" pill spans the frame on mobile and becomes a centred `31rem` pill from `md`. The company logo row shows from `lg`, and the floating toolbar, notification card and bottom divider show from `xl`.
- **Benefits:** Cards wrap in a flex row, capped at `md:max-w-[24rem]` each.
- **Collaboration:** The text column and orbit are stacked on mobile and sit side by side from `lg`. The orbit's connecting curves appear at `xl`.
- **Services:** The photo editing and video generation panels are one column, then a two-column grid at `lg`. Panel padding and the main panel height increase at `lg` / `xl`.
- **Pricing:** Cards are full width and wrap below `lg` (`max-lg:flex-wrap`, `max-lg:w-full`), then sit in one row from `lg`. The sphere-and-stars graphic and the side line decorations show only from `lg`.
- **Roadmap:** One column on mobile, two columns from `md`, with every even card offset downward (`even:md:translate-y-[7rem]`) for a staggered look.
- **Footer:** Stacked and centred below `sm` (`max-sm:flex-col`), copyright and socials split to opposite ends from `sm`.
