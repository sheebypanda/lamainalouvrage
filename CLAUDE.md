# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static one-page marketing site in French for "La main à l'Ouvrage", an art workshop (painting / papier-mâché) run by the association iDi interaction d'idées in Langon, France. No build step, no package manager, no tests — plain HTML/CSS/JS served as-is.

Deployed via GitHub Pages directly from this repo at the custom domain in `CNAME` (lamainalouvrage.fr). There is no CI config; pushing to `main` is the deploy.

## Working locally

There's no dev server or build tool. Open `index.html` directly in a browser, or serve the directory statically, e.g.:

```
python3 -m http.server 8000
```

## Structure

- `index.html` — the entire site. A single page with anchor-linked sections (`#accueil`, `#ateliers`, `#equipe`, `#agenda`, `#offres`, `#artiste`, `#contact`) navigated via a fixed Bootstrap navbar with scrollspy (`data-bs-spy="scroll"`).
- `css/style.css` — all custom styling, layered on top of vendored `css/bootstrap.min.css`. Color palette and section backgrounds are driven by CSS custom properties defined in `:root` (`--ocre`, `--bleu`, `--brun`, etc.) and then Bootstrap's `.text-warning`/`.text-danger`/`.text-primary`/etc. utility classes are overridden to point at those variables — so semantic Bootstrap color classes in the HTML don't mean "warning/danger", they mean specific brand colors.
- `js/script.js` — a single small IntersectionObserver that toggles an animate.css bounce class on headings as they scroll into/out of view. The only JS in the project.
- `img/` — photos and logos referenced by `index.html`.
- `src/` — source/downloadable assets linked from the page (flyer PDF, content PDF, a couple of source images), not build sources.
- `js/bootstrap.bundle.min.js`, `css/bootstrap.min.css` — vendored Bootstrap 5, not managed by a package manager; update by replacing the file directly if ever needed.
- External dependencies loaded via CDN in `<head>`: Font Awesome icons, animate.css, and Google Fonts (Cinzel, Courier Prime, Love Ya Like A Sister, Montserrat).

## Content specifics worth knowing before editing

- The `#agenda` section embeds a Google Calendar iframe plus a hand-written weekly timetable ("agenda-fusion" grid) built from repeated `.agenda-card` divs per day (Mardi/Mercredi/Jeudi/Vendredi/Samedi). Card color variants (`agenda-card--adulte`, `--paire`, `--enfant`, `--enfant-paire`) encode audience/frequency and are explained in the `.agenda-legende` block at the end of that section — keep the legend in sync if you add a new variant.
- The `#offres` section is a grid of pricing cards (`.ticket` cards); prices and the family/sponsorship discount note are plain text in the HTML, not computed.
- Text content is in French; keep accents and typographic apostrophes (’) consistent with the existing copy when editing.
- `index.html` is the single source of truth for content — there's no templating or CMS.
