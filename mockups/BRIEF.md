# Mockup brief — shared by all 3 directions

Purpose: help Michal Kleinboim (L&D / Instructional Design specialist) and her partner **choose a visual direction** for her portfolio site. All three mockups use the SAME copy below, so only the design differs. Primary audience: recruiters / hiring managers for senior L&D roles (e.g. NVIDIA L&OD). A recruiter should grasp her value and best work within 30 seconds and be able to contact her or download her CV in one click.

Mockups are throwaway, but should look like a finished site: real layout, real copy, real responsiveness (375px phone, 768px tablet, 1440px desktop), with no horizontal scroll at any width.

## Files per direction
- `mockups/<x>/index.html`: the home page (single long page with sections)
- `mockups/<x>/case.html`: one case-study page (Cyber Security)
- Self-contained: inline `<style>`, minimal inline vanilla JS (mobile menu, filter chips that actually filter the cards). Fonts from Google Fonts are OK. No other external dependencies, no build step.
- Photo: `../assets/michal.jpg` (square, 670px). Project thumbnails: there are no image files yet, so use tasteful placeholders: CSS gradient or pattern tiles with a simple inline-SVG icon per category, plus a small "image" label. Video: a 16:9 placeholder with a play button and the caption "Video coming soon".
- Use real links between index.html and case.html. Other project cards may link to `case.html` as well.

## Original Figma identity (for reference)
- Light cool-grey page `#f2f5f9`, white rounded cards, peach cards `#ffebd1`, light-blue cards `#f2f7fc`
- Accent: an orange→red gradient `#ff991a → #ec1c08`. Titles have a thin gradient line next to them.
- Font: Poppins (headings), with a light sans for body. Handwritten "MK" logo (render as a stylised "MK" text mark).
- Layout: a sticky left profile card (photo, name, title, phone/email/location, Download Resume) + a right content card with a Home / Resume / Work tab pill.

## Copy (use verbatim; you may shorten it to fit, but don't invent facts or numbers)

**Name:** Michal Kleinboim
**Title:** Learning & Development · Instructional Design Specialist
**Location:** Petah Tikva, Israel
**Email:** Michal.kleinboim@gmail.com · **Phone:** +972 50-347-8599
**LinkedIn:** # (placeholder)

**Hero headline:** I design learning that moves the business forward.
**Hero sub:** L&D and instructional-design specialist with 5+ years building end-to-end learning programs: from needs analysis to AI-powered courseware, video and onboarding, for global, matrixed and public-sector organizations.
**CTAs:** "View my work" (primary) · "Download CV" (secondary) · "Get in touch" (tertiary or nav)

**At a glance (highlight strip, no fake metrics):**
- 5+ years in Learning & Development
- Built an L&D function from the ground up (IT division, Israel Fire & Rescue Authority)
- Directed an AI-in-teaching video series for Microsoft Education IL
- M.A. Educational Technologies, Learning Design

**Trusted by / worked with (text logos):** Microsoft Education IL · El Al Security (via Ofek Array) · Israel Fire & Rescue Authority · Maytronics · HIT · Yehud Education Dept.

**About:** I'm a Learning & Development professional with a strong technological sense, a problem-solver's mindset and a strategic view. I lead L&D initiatives end-to-end and align them with business priorities, working with cross-functional and global teams. I turn ideas into scalable programs and employee experiences that people actually remember.

**How I work (4 steps):**
1. **Analyze needs:** I start with the business: goals, audiences and performance gaps. A systemic needs analysis keeps every initiative focused on real organizational change.
2. **Design solutions:** I design learning programs, onboarding journeys and scalable training structures around those needs, so the experience feels seamless and drives performance.
3. **Develop & execute:** I build interactive courseware, videos and resources, using multimedia and AI tools to speed up production without losing quality.
4. **Evaluate & refine:** I gather feedback, analyze outcomes and run QA reviews, then iterate until the solution meets and exceeds its objectives.

**Selected work (filter chips: All · E-learning · Onboarding · Video · Web & Marketing):**
| Title | Category | One-liner |
|---|---|---|
| Cyber Security Courseware | E-learning | Turned mandatory security training into an engaging, story-driven course with point-of-view videos starring real employees. (Storyline) |
| AI for Teachers: Microsoft Education IL | Video | A promo and training video series encouraging teaching staff to adopt AI tools, released during the Ministry of Education's AI Week. (Premiere Pro, After Effects, Illustrator) |
| Maytronics Onboarding Kit | Onboarding | A needs-based welcome journey for new hires at a global high-tech manufacturer, on desktop and mobile. (Genially) M.A. thesis |
| "Love Thy Neighbor": Academic Course | E-learning | Adapted a debate-heavy in-person Judaism course at HIT into interactive online courseware with built-in assessment. (Storyline, Moodle) |
| Work Safety Videos | Video | Animated videos for a regulation-compliant work-safety course. (Vyond) |
| Social Media Videos | Web & Marketing | Short videos produced for Facebook marketing campaigns. (Create Studio) |
| Raftique Picnic: Business Website | Web & Marketing | Ran a picnic business's website end-to-end: photo shoots, image editing and marketing strategy. (Wix) |
| Nike Gloves: Landing Page Concept | Web & Marketing | Concept landing page for sports gloves, designed during graphic design studies. (Figma) |

**Experience (compact timeline):**
- 2026–Present · Instructional Designer · Ofek Array (El Al Security instruction dept.)
- 2025–2026 · Instructional Design Specialist · G-NESS (on-site at Israel Fire & Rescue Authority)
- 2022–2025 · Instructional Designer & Projects Lead · T.MORE Advanced Learning Solutions
- 2022 · Instructional Designer · HIT, Center for the Advancement of Teaching
- 2014–2016 · Arabic Instructor, Commander's Course · IDF Unit 8200

**Tools:** Articulate Storyline · Genially · Camtasia · Vyond · Moodle · Figma · After Effects · Illustrator · Photoshop · Canva · Gemini · NotebookLM · Claude · VEO 3 · Monday

**Contact section:** headline "Let's build learning that works." A form with Name, Email, Message and Send (non-functional in the mockup), plus email, phone, LinkedIn and a Download CV button.

**Footer:** © 2026 Michal Kleinboim

## Case study page (case.html): Cyber Security Courseware
- Meta row: Category: E-learning · Role: Instructional Designer, Scriptwriter & Producer · Tools: Articulate Storyline · Client: *[to confirm]*
- **The challenge:** Mandatory cyber-security training is notoriously dry, and employees tune out. The goal was to turn a monotonous compliance topic into a learning experience people would actually engage with.
- **Audience:** All employees required to complete annual security training.
- **My approach:** I built interactive courseware around point-of-view videos featuring real employees. I wrote the scripts, managed the director, actors and production schedule, and even acted in a scene myself, so the scenarios felt relatable and authentic.
- **The product:** a video placeholder (16:9, play button) with the caption "Excerpt from the courseware (3× speed)", plus a "Full screen" control.
- **Outcome:** render a clearly marked placeholder box: "Outcome / impact: to confirm with Michal (e.g. completion rate, feedback)". Don't invent numbers.
- Footer navigation: ← Back to work · Next project →
- A persistent "Download CV" / contact access (header or sticky element).

## Quality bar
- Accessible: semantic landmarks, alt text, visible focus states, AA contrast, `prefers-reduced-motion` respected.
- Tasteful micro-interactions (hover lift on cards, smooth scroll, subtle reveal-on-scroll), nothing gimmicky.
- Mobile: hamburger or compact nav, stacked sections, touch-friendly 44px targets.
- Put a small fixed badge in a corner reading "Direction <X>: <name>" so the mockups are easy to tell apart.
