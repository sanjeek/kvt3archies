# KVT 3 Architects

Responsive architecture and town planning portfolio. Semantic HTML, CSS and JavaScript; no dependencies or build step.

## Preview

Run `python3 -m http.server 3000` here and visit `http://localhost:3000`.

## Vercel

Import `sanjeek/kvt3archies`. Framework: **Other**. No build command, no environment variables. The included `vercel.json` configures static hosting from the repository root.

## Features

Responsive editorial layout; mobile navigation; three-image hero; five portfolio entries; image/drawing filters; keyboard-accessible native dialog viewer; services accordion; direct email enquiry form; privacy information; reduced-motion support; social metadata and favicon.

## Content

Company information adapted from https://kvt3archies.com/ and its `/about/`, `/services/`, `/projects/` and `/contact/` pages. Established date, director name, service scope and contact details come from these sources. Professional registration/qualification claims and experience-year claims are omitted pending current confirmation.

The opening slideshow uses modern Unsplash reference photographs, clearly labelled as inspiration and not as KVT 3 projects. The original pictures remain in the Portfolio archive. Portfolio images load directly from the existing KVT 3 Architects website; keep those URLs available until originals can be copied into the repository. Google Fonts has system-font fallbacks. Portfolio headings are neutral editorial labels, not verified project names or locations. Replace labels/descriptions in `script.js` with confirmed project information and credits when available.

The enquiry form posts directly to FormSubmit for forwarding to **kvt3archies@optusnet.com.au**. No API key is required. FormSubmit handles spam protection and redirects accepted submissions to `thank-you.html`. The first submission triggers an activation email; the inbox owner must confirm it before delivery works. If the sending domain changes, check activation again. Submit a real test from the live site, activate the form using the inbox email, then submit another test and verify delivery. Do not regard deployment success as an inbox delivery test. Keep the hidden `_next` field aligned with the production thank-you URL.


## Checks

`node --check script.js` and `python3 checks.py`.
