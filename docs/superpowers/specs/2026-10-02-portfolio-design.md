# Plan — Michal Kleinboim Portfolio Website

## Context
Michal Kleinboim (L&D / Instructional Design Specialist, 5+ yrs; Ofek Array, G-NESS, T.MORE, Microsoft Education IL, M.A. EdTech, 8200) has her portfolio only as a Figma file (password 12345). Goal: turn it into a real, responsive (mobile/tablet/desktop), better-looking website with sharper copy and a few functions, hosted for free. Primary audience: recruiters / hiring managers for senior L&D roles (e.g. NVIDIA L&OD). Success = a recruiter grasps her value and best work in ~30s and can contact her or download her CV in one click.

Source material: CV + cover letter (`~/Downloads/*.docx`, already read), Figma file `9th3pkhq1BaSOU3zO3VBEC`.

Figma structure (seen from canvas overview): vCard-style layout — left sidebar card (photo, name, contacts, orange CTA), top tabs, orange accent on light background. Frames: Landing/About, Resume, Work (portfolio grid), and project pages: Social Media videos, Courseware, Animated (Vyond-style) office videos, Business website ("Grip Your Future. Glove UP!" gloves landing page), Cyber security video, Academic course (Hebrew), AI for teachers (Microsoft Edu), Maytronics onboarding kit (thesis).

## Decisions made with the user
- Design direction: **build 2–3 visual mockups on localhost, user + Michal pick one**
- Project pages: **case studies** (Challenge → Audience → My role → Approach → Tools → Outcome + media)
- Language: **English only**
- Features: **downloadable CV (PDF), contact form, portfolio filters**
- Hosting: **Netlify** free tier; **free subdomain** (e.g. `michal-kleinboim.netlify.app`) — custom domain later (michalkleinboim.com / michalk.ai were available on 2026-10-02)
- Videos: **YouTube unlisted later; placeholders now** (one field per project to swap in the ID)

## Approach
**Stack:** Astro (static output) + plain CSS (custom properties, fluid type, CSS grid) + a tiny bit of vanilla JS (filters, mobile menu). No framework runtime, no backend. Netlify builds Astro natively.
- Why: projects become simple Markdown files → easy for Michal to edit later; zero JS by default → fast on mobile; free Netlify Forms covers the contact form.

**Project layout (`/Users/idanezer/mich`, git init):**
- `docs/superpowers/specs/2026-10-02-portfolio-design.md` — this design written as spec
- `design/figma/` — captured Figma frames + extracted texts/images (reference only)
- `mockups/` — 2–3 throwaway HTML direction mockups
- `src/content/projects/*.md` — one case study per project; frontmatter: `title, slug, category (video | elearning | courseware | web | ai), client, role, year, tools[], summary, cover, youtubeId?, gallery[]`, body = case-study sections
- `src/pages/` — `index.astro` (hero + value prop + highlights + featured work + CTA), `resume.astro` (timeline, education, tools, languages, CV download), `work/index.astro` (grid + filters), `work/[slug].astro` (case study template), `contact.astro` (or section on home)
- `src/components/` — `Header/Nav`, `ProfileCard`, `ProjectCard`, `FilterBar`, `VideoEmbed` (YouTube lite-embed with placeholder poster when no ID), `Timeline`, `ContactForm`
- `public/cv/Michal-Kleinboim-CV.pdf`, `public/images/…`
- `netlify.toml`

## Execution steps
1. **Capture Figma content** (headless Chrome via Playwright in scratchpad, already proven to pass the password). Viewer mode blocks frame selection, so zoom into each frame region on canvas (ctrl+scroll at frame coordinates) and screenshot at high DPI; extract all copy + project descriptions into `design/figma/content.md`; save images used in the design. *(Optional speed-up: a read-only Figma personal access token lets me export exact frames/images via API.)*
2. **Write spec** to `docs/superpowers/specs/…` and git init/commit.
3. **Mockups (gate):** 2–3 directions of the home page + one case-study page, served on localhost:
   - A — *Polished original*: her vCard sidebar + orange identity, refined type/spacing/motion, proper mobile layout
   - B — *Modern editorial*: big hero with value statement, impact numbers, case-study cards, scroll sections
   - C — *AI-forward / bold*: darker, gradient accents, emphasizes "AI in learning" narrative
   → user + Michal choose (or mix). **Stop for approval.**
4. **Copy pass:** rewrite About/hero/summary and each case study from CV + cover letter + Figma text, action- and outcome-oriented; mark unknown facts (numbers, outcomes) as `TODO(Michal)` for her to confirm — no invented metrics.
5. **Build site** in Astro with chosen direction: pages, components, filters (category chips, URL hash state, works without JS = shows all), contact form via Netlify Forms (`data-netlify="true"`, honeypot spam field, thank-you page), CV PDF download button (header + resume page), YouTube placeholders, SEO basics (title/description/Open Graph image, favicon "MK"), accessibility (semantic HTML, alt text, focus states, contrast, reduced-motion).
6. **CV PDF:** export from the .docx (LibreOffice headless if installed, otherwise ask Michal to "Save as PDF" from Word) → `public/cv/`.
7. **Deploy to Netlify:** push to a GitHub repo (user's account) and connect in Netlify UI → auto-deploy on every push; or `netlify deploy` via CLI. User logs in themselves (`! netlify login`). Verify form submissions arrive by email.

## Verification
- `npm run dev` → walk through every page with the user on localhost.
- Playwright screenshots at 375 (phone), 768 (tablet), 1024, 1440 (desktop) for every page; check no horizontal scroll, nav works, filters work, video placeholders render.
- `npm run build` clean; Lighthouse ≥ 90 on performance/accessibility/SEO.
- On Netlify preview URL: submit test contact form → received; CV downloads; all case-study links resolve.

## Open items (not blocking)
- Michal's real YouTube IDs, any outcome numbers for case studies, LinkedIn URL, high-res photo.
