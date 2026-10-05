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
- **Glass treatment:**
  - User cards use a translucent gradient rather than an opaque fill so the page
    background remains visible through the card.
  - Light mode card gradient: pale cream/green with approximately 70-80% opacity.
  - Dark mode card gradient: navy/blue with approximately 60-75% opacity.
  - Use `backdrop-blur`, a subtle border, and a restrained shadow to create depth
    without losing the editorial feel.

## 3. Typography
- **Headings:** Enlarged Serif Font (e.g., `Playfair Display`, `Merriweather`, or `Cinzel`). Needs to feel elegant and editorial.
- **Body:** Clean Sans-Serif or highly readable Serif (e.g., `Inter`, `Lora`).

## 4. UI Components & Border Radius
- **Border Radius:** Slightly rounded corners (`rounded-md` or `rounded-lg`, ~4px-8px) to soften the elegant editorial look and give it a modern touch.
- **Card Styling:** Borders with a subtle transition on hover.
- **Buttons:** Minimalist outlines that fill on hover, matching the elegant theme.
- **Favorite Icon:** A minimalist heart or bookmark icon outline that fills with the Accent color (Muted Gold/Vintage Red/Light Blue) when clicked, featuring a subtle pop/scale animation.
- **Navigation:** The navbar remains visible and its buttons remain available at
  all times. Navigation controls scroll to anchored sections on the same page
  instead of changing routes:
  - `Home` scrolls to the top/hero section.
  - `Users` scrolls to the user carousel.
  - `About` scrolls to the bottom/about section.
  - The navbar is sticky and should provide an active-section indication.

## 5. Animation & Interactions (Framer Motion / Tailwind)
- **Section scrolling:** Anchor navigation uses smooth scrolling while preserving
  the single-page layout and the persistent navbar.
- **User carousel:** User cards move automatically from right to left along a
  shallow curved path. Card scale and visual emphasis vary by position, with the
  centered card reaching the maximum size and emphasis.
- **Carousel focus:** Hovering a card pauses automatic movement and animates that
  card toward the center position. The focused card remains readable above the
  surrounding cards. Leaving the carousel resumes automatic movement.
- **Card entrance:** The carousel may use a restrained fade/slide entrance, but
  cards must remain visible if animation or reduced-motion preferences disable it.
- **Hover states:** Use subtle scale, glass highlight, border, and accent-color
  transitions rather than abrupt effects.
- **Reduced motion:** Respect `prefers-reduced-motion` by disabling automatic
  movement and replacing positional transitions with minimal fades.

## 6. UX Flow & Layouts
- **Single-page layout:** The prototype is one continuous page with three anchored
  sections:
  1. **Home:** Editorial hero section at the top.
  2. **Users:** Glass-card carousel beneath the hero.
  3. **About:** Project/team description at the bottom.
- **Users section:** The carousel replaces the static card grid. It should remain
  horizontally contained and responsive, with cards arranged along the curved
  right-to-left motion path.
- **Profile expansion:** Selecting `View Profile` expands the selected card in
  place (or opens an in-page overlay) to show the portrait, name, role, company,
  and additional details, with a clear close/back action. It must not navigate
  away from the single page.
- **Persistent controls:** The sticky navbar retains the theme toggle and
  favorites count while the user moves between sections.
- **Responsive behavior:** On narrow screens, simplify the curved path and reduce
  the number of simultaneously emphasized cards while keeping the same section
  order and interactions.

---
## 7. Prototype Implementation Plan
1. Convert the current prototype into a single-page layout with `home`,
   `users`, and `about` anchors.
2. Keep the sticky navbar persistent and wire each button to smooth-scroll to
   its corresponding section.
3. Replace opaque user cards with responsive gradient-glass cards using the
   documented light/dark tokens.
4. Implement the right-to-left curved carousel with position-based scale,
   automatic movement, hover-to-center behavior, and pause/resume logic.
5. Add an in-page profile expansion state for `View Profile`, including a
   close/back action and keyboard-accessible focus handling.
6. Add reduced-motion fallbacks and verify the design in both color themes.

*Note: The prototype will validate this interaction and visual flow in standalone
HTML using Tailwind CSS before the behavior is transferred to the React
application.*
