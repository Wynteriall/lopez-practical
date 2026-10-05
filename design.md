# Design Tokens & Guidelines

This document serves as the single source of truth for the design system, UX flow, and animation guidelines for the website. It will be updated as we finalize our design decisions.

## 1. Core Concept & Vibe
**Editorial & Botanical Elegance**
- Light Mode: "Nature Green Light vibes" - Vintage, natural, botanical feel with cream and olive tones.
- Dark Mode: "Midnight blue essence" - Deep, sophisticated navy/midnight blue with high-contrast elegant text.
- Overall feel: Magazine-like, sophisticated, typographic-driven.

## 2. Color Palette (Tailwind CSS)
- **Light Mode:**
  - Background: Cream / Off-white (e.g., `#f4f1ea`)
  - Primary Text: Deep Forest Green (e.g., `#2c402e`)
  - Accent: Muted Gold or Vintage Red (e.g., `#8b2615` or `#d4af37`)
  - Card Background: Pale Green / Cream (e.g., `#e8e5d9`)
- **Dark Mode:**
  - Background: Midnight Blue (e.g., `#0f172a` or `#131b2b`)
  - Primary Text: Soft White / Cream (e.g., `#f8fafc`)
  - Accent: Pale Yellow or Light Blue (e.g., `#fef08a`)
  - Card Background: Darker Navy / Glassy Blue (e.g., `#1e293b`)

## 3. Typography
- **Headings:** Enlarged Serif Font (e.g., `Playfair Display`, `Merriweather`, or `Cinzel`). Needs to feel elegant and editorial.
- **Body:** Clean Sans-Serif or highly readable Serif (e.g., `Inter`, `Lora`).

## 4. UI Components & Border Radius
- **Border Radius:** Slightly rounded corners (`rounded-md` or `rounded-lg`, ~4px-8px) to soften the elegant editorial look and give it a modern touch.
- **Card Styling:** Borders with a subtle transition on hover.
- **Buttons:** Minimalist outlines that fill on hover, matching the elegant theme.
- **Favorite Icon:** A minimalist heart or bookmark icon outline that fills with the Accent color (Muted Gold/Vintage Red/Light Blue) when clicked, featuring a subtle pop/scale animation.

## 5. Animation & Interactions (Framer Motion / Tailwind)
- **Scrolling:** Animated scrolling for user cards (e.g., fade-in up, staggered entrance).
- **Hover States:** Subtle scale-up, elegant color transitions.

## 6. UX Flow & Layouts
- **Home / Directory Page:** Grid of user cards that animate in on scroll. Sticky, elegant navbar with theme toggle and favorites count.
- **User Details Page (`/users/:id`):** A split-screen editorial layout. A large, high-quality portrait image on one side, paired with typography-rich details (name, role, company) and a prominent "Favorite" action on the other side.

---
*Note: We will build an interactive HTML prototype first using Generative UI and Tailwind CSS to validate this design before fully implementing it into the React application.*
