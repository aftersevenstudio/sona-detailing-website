# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Sona Detailing — Claude Code Context

## Project Overview
Landing page website for **Sona Mobile Detailing**, a mobile auto detailing business based in **Frisco, TX**.
Built by **After Seven Studio (A7)** for a client.

The site is a clean, conversion-focused landing page. Its primary goal is to drive appointment bookings via an embedded **Square** scheduling widget.

---

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Booking:** Square Appointments embed
- **Hosting:** Vercel
- **Domain:** sonadetailing.com

---

## Code Conventions
- Use **single quotes** in all `.tsx` and `.ts` files
- Use **TypeScript** throughout
- Use **App Router** conventions (`app/` directory, not `pages/`)
- Components go in `src/components/`
- Keep pages lean — logic lives in components
- Prefer **named exports** for components
- Use Tailwind utility classes only — no custom CSS unless absolutely necessary
- Mobile-first responsive design

---

## Site Structure
```
app/
  layout.tsx        # Root layout, metadata, fonts
  page.tsx          # Main landing page (single page)
src/
  components/
    Hero.tsx        # Above-the-fold section with CTA
    Services.tsx    # Service packages + pricing
    Gallery.tsx     # Before/after photo grid
    Booking.tsx     # Square appointment embed
    Reviews.tsx     # Google reviews / testimonials
    Footer.tsx      # Contact info, social links, service area
```

---

## Business Details
- **Business name:** Sona Mobile Detailing
- **Location:** Frisco, TX (serves surrounding DFW suburbs)
- **Booking:** Square Appointments (client already has Square account)
- **Key selling points:** Mobile (comes to you), professional-grade, Frisco/DFW area

---

## Design Direction
- Clean, modern, premium feel — not a generic local biz template
- Dark or deep-toned hero (cars look great on dark backgrounds)
- High contrast CTAs
- Fast and lightweight — no unnecessary animations or heavy libraries
- Before/after gallery is important social proof — treat it as a first-class section

---

## Key Rules
- The **booking CTA** should be visible above the fold and repeated at least once more on the page
- Do not add a blog, CMS, or any backend — this is a static marketing site
- Do not use `<form>` tags for interactions — use onClick/onChange handlers
- Keep the bundle lean — no UI libraries unless Tailwind isn't enough
- Square embed goes in its own `Booking` component for easy swap-out later
