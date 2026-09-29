# Boardwith investor deck

Web presentation for the Shadow Institute Gate 1 pitch (7 October 2026) and 20-minute investor meetings. 10 core slides plus 4 backups (A1–A4), built with React and Vite and deployed on Netlify.

All copy lives in `src/data/startupData.js`. Slide components only lay it out.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/
```

### Images

The converted images are committed in `public/images/`. To redo them, put the originals in `source-images/` (the names are listed in `source-images/README.md`) and run `npm run images`, then commit `public/images/` and `public/favicon.png`.

**Team photos (slide 8)** are matched by first name (`Aditya.*`, `Adarsh.*`, `Shivani.*`). Every photo gets the same crop: head and shoulders, eyes 38% from the top, the same head size. The crop uses face positions measured for each current photo, set in `teamJobs()` in `scripts/prepare-images.mjs`, so a replacement photo needs new numbers there. iPhone `.heic` files are converted with the Mac's built-in `sips`; on other systems, export the photo as a JPEG first. If a photo is missing, the slide shows the person's initials in the window frame.

## Presenting

| Key | Action |
| --- | --- |
| → Space PgDn · click right third · swipe left | Next |
| ← PgUp · click left third · swipe right | Previous |
| Home / End | Slide 1 / slide 10 |
| 1–9, 0 | Slides 1–9, 10 |
| A | Backups (A1) |
| Esc | Overview of all 14 slides |
| F | Fullscreen |
| N | Speaker notes (5-min script and 20-min points) |
| T / R | Start or pause / reset the timer |

The URL hash tracks the slide (`#/4`, `#/a2`), so a reload keeps your place. The timer counts down from 5:00 or 20:00, depending on which notes tab is open. It shows each slide's target from the timing table and turns orange when you fall behind.

**PDF:** open `/?print` and use Chrome's "Save as PDF". You get 14 pages at 1920 × 1080.

**Phones** (under 600px wide, or a phone held upright) get a scrolling reading version.

**Founder inputs:** all were resolved on 28 September, so none show on the slides. If you add one back, write it as `[FOUNDER INPUT: …]` in `src/data/startupData.js`. It then renders as a dashed peach box, and `npm run dev` counts it in a corner badge.

**Print footer:** every `?print` page carries "Boardwith. Pre-seed. Confidential." bottom left.

## Checking the layout

```bash
npm run build && npm run check
```

`scripts/check-deck.mjs` renders every slide at 1920 × 1080 with the real fonts and fails if any text:

- runs into the flight path (below y 1000),
- runs off the sides, or
- overlaps other text.

It also lists any text under 32px, so you can confirm it's only sources, footnotes and tags. It saves screenshots at 1920 × 1080, 1366 × 768 and 820 × 1180, a 390 × 844 reading-mode capture and `deck.pdf` to `screenshots/`. It needs Chromium (`CHROMIUM_PATH`, default `/opt/pw-browsers/chromium`).

## Deploy

Connect the repository in Netlify. `netlify.toml` sets the build command, the publish folder, the SPA redirect and the `noindex` and security headers. The deck names interviewees, so keep the URL unlisted, and turn on password protection if your plan has it.

## What's on a slide

Each slide shows only its "On the slide" text from the brief, about 50 words besides the headline. Everything under "Said, not shown" lives in the speaker notes: each slide's 20-minute notes open with a "Said, not shown" line holding the copy that moved off it. Sources appear in the notes panel, the `?print` PDF and phone reading mode, never on the live stage. Only estimates, assumptions, projections and concept screens carry a tag on the core slides; untagged numbers are evidence. The backups keep their evidence tags.

## Where the build departs from the brief

- **Fonts are self-hosted** through Fontsource (the brief allows this) instead of loaded from Google Fonts. There's no third-party request, and the layout check measures the real faces. Headlines and the hero use Anek Latin at 87.5% width (semi-condensed), which the brief describes as the signage look.
- **Slide 3:** the two price anchors sit side by side.
- **Slide 10:** every use-of-funds segment is white at stepped opacity. None is orange, because the brief's "one orange element per slide" rule is already met by the C$30,000.
- **Team photos:** the brief describes ready-made 600 × 876 files on a grey background. The repo has the earlier 480 × 702 crops instead, made from your originals with the same framing for all three. They fit the new 200 × 292 frame, because the proportions match. To use the new files, save them as `public/images/team-*.webp`; no code change is needed.
- **Backup A3** is the only slide with body text under 32px: its two tables and notes are set at 28px. Everything in it only fits at that size.
- **Lighthouse** scores weren't measured in this environment. Run Lighthouse on the Netlify preview to confirm the 95+ accessibility and 90+ performance targets.
