# RABATASK Landing Page — Rebuild Plan

## Goal
Rebuild the landing page on a clean, isolated branch instead of continuing to layer CSS overrides onto the existing implementation.

## Current implementation audit
- Static site deployed through Cloudflare Pages from the `main` branch.
- Main files: `index.html`, `style.css`, `script.js`.
- Current page sections: hero, about, services, promise, contact.
- Current services are limited to three cards: post-construction cleaning, glass/facade cleaning, and restaurant hood cleaning.
- The header currently relies on a large image with transparent navigation hotspots. This is fragile across screen sizes and should be replaced with real HTML navigation.
- The services CSS is very large and has accumulated multiple overlapping rules. It should be rebuilt cleanly, not patched again.
- Existing language switcher and WhatsApp quote flow need to be preserved and tested.

## Brand rules
- Brand: RABATASK — Professional Services.
- Keep the official supplied logo/artwork; do not redraw or replace it with a generic mark.
- Core palette: deep plum/burgundy, warm gold, silver, and white/off-white.
- The service photography should communicate the service first, while showing staff in RABATASK-branded purple uniforms as supporting context.
- Do not use promotional posters or photos with text baked into the image.

## New page structure
1. Header: responsive HTML navigation, official logo, language switch, WhatsApp/contact CTA.
2. Hero: concise positioning statement, primary CTA, strong service-focused visual.
3. About: short company introduction and service coverage.
4. Services: consistent image/text cards with a clear grid and identical image frames.
5. Why RABATASK: quality, trained teams, equipment, safety, and reliability.
6. Process: request, assessment, quotation, execution, follow-up.
7. Contact: working WhatsApp CTA and validated quote form.

## Implementation rules
- Build a clean, semantic HTML structure.
- Use a small, organized CSS system with reusable variables and components.
- Avoid image backgrounds for content cards; use real `img` elements with explicit aspect ratios and `object-fit: cover`.
- Keep desktop cards aligned and responsive; no fixed page widths or horizontal overflow.
- Mobile layout must be designed intentionally, not merely scaled down.
- Keep all meaningful copy as selectable HTML text, never embedded in images.
- Keep Arabic RTL and French LTR layouts correct.

## Acceptance checks before merge
- Desktop at 1440px and 1920px: no horizontal overflow; cards have matching dimensions and aligned text.
- Tablet at 768px: no clipped cards or navigation.
- Mobile at 390px and 360px: no horizontal overflow; menu, language switch, CTAs and cards work.
- All service images load, are sharp, correctly framed, and have descriptive alt text.
- Navigation anchors work.
- French/Arabic switch updates all relevant text and direction.
- Quote form opens WhatsApp with the entered details and correct number.
- No console errors or broken local asset paths.
- Do not merge to `main` until visual review and these checks pass.
