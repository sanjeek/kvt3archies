# KVT 3 Architects

Responsive architecture and town planning portfolio. Semantic HTML, CSS and JavaScript; no dependencies or build step.

## Preview

Run `python3 -m http.server 3000` here and visit `http://localhost:3000`.

## Vercel

Import `sanjeek/kvt3archies`. Framework: **Other**. No build command, no environment variables. The included `vercel.json` configures static hosting from the repository root.

## Features

Responsive editorial layout; mobile navigation; three-image hero; five portfolio entries; image/drawing filters; keyboard-accessible native dialog viewer; services accordion; email enquiry composer; privacy information; reduced-motion support; social metadata and favicon.

## Content

Company information adapted from https://kvt3archies.com/ and its `/about/`, `/services/`, `/projects/` and `/contact/` pages. Established date, director name, service scope and contact details come from these sources. Professional registration/qualification claims and experience-year claims are omitted pending current confirmation.

Images load directly from the existing KVT 3 Architects website; keep those URLs available until originals can be copied into the repository. Google Fonts has system-font fallbacks. Portfolio headings are neutral editorial labels, not verified project names or locations. Replace labels/descriptions in `script.js` with confirmed project information and credits when available.

The enquiry form prepares a `mailto:` draft. It does not send email or submit information to a server; visitors send the draft through their own email application. A future server email integration requires a chosen provider and credentials stored only in server environment variables.

## Checks

`node --check script.js` and `python3 checks.py`.
