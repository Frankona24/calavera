# Calavera Stvdio - Static Website

## Structure
- `theme/` is the site root. All HTML pages live here directly.
- No build system, bundler, or package manager. Plain HTML/CSS/JS.
- Serve with any static server (e.g. `python -m http.server` inside `theme/`).
- **Do NOT open files via `file://` URLs** — Google Maps iframe and some assets require HTTP.

## Key Files
- `css/style.css` — all custom styles (SCSS source not present, `.map` file is stale)
- `js/script.js` — jQuery-based: preloader, sticky nav, mobile menu, smooth scroll, fade-in on scroll, hero parallax, testimonial carousel
- `plugins/` — vendored libs: jQuery, Bootstrap (CSS+JS), Slick, Themefisher fonts

## Conventions
- Pages: `index.html`, `interiorismo.html`, `branding.html`, `arquitectura.html`, `contacto.html`
- Project detail pages: `proyecto-*.html` (one per gallery item). All paths are relative to `theme/` root — **no `../` prefixes**.
- Google Maps on `contacto.html` uses an **iframe embed** (no API key needed). Do not re-add the JS API unless explicitly requested.
- Testimonial carousel on `index.html` uses fade transitions with auto-rotate every 5s and clickable dots.
- Testimonial avatars use CSS `.avatar-circle` with initials and unique background colors — no image files.
- Mobile menu: hamburger toggles `.navbar-nav.active` which slides in from right.

## Project Detail Pages (`proyecto-*.html`)
- Structure: hero → meta grid (6 items) → alternating text+image blocks → image slider (auto-rotate 4s) → plans slider (auto-rotate 5s) → features → materials tags → CTA.
- Each slider uses inline `<script>` at bottom with `initSlider()` helper.
- All asset paths are root-relative within `theme/`: `images/`, `css/`, `js/`, `plugins/`.
- Navigation links point to sibling files (e.g. `../index.html` → `index.html`).

## CSS Notes
- Uses CSS custom properties (defined in `:root`): `--color-primary`, `--color-dark`, `--color-light`, `--color-white`, `--color-gray`, `--color-dark-gray`, `--transition`
- `.section` has `padding: 8rem 0` (desktop) / `5rem 0` (mobile)
- Responsive breakpoint: `@media (max-width: 768px)`

## Workflow
- No lint/typecheck/test commands. Manual browser verification only.
- Changes are immediate — no rebuild step.
