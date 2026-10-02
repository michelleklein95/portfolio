# Michal Kleinboim Portfolio: Figma Content Extraction

Source: 24 PNG screenshots in this folder (Figma canvas at about 43% zoom, file name "Portfolio Michal Kleinboim."). The orange around the frames (#ff9c1a) is the **Figma canvas**, not part of the design. Frame titles (small dark text above each frame) are quoted exactly as they appear, typos included ("Landing POage", "Academic COurse").

Sampled colors are approximate (taken from the PNG pixels).

---

## 1. Global design notes

### Canvas / frame layout
- Each frame is a desktop page, about 1440 x 768 (wide landscape, roughly 1.88:1).
- **Page background:** very light cool grey-blue `#f2f5f9`.
- **Top-left:** the "MK" handwritten logo.
- **Left column (about 22% of width):** a white profile card (`#ffffff`, about 16px rounded corners, no visible border, very soft or no shadow).
- **Right column (about 53% of width):** a large white content card with the same radius. A **nav pill** sits above it, aligned to its top-right.
- Both cards start at the same vertical position. The profile photo overlaps the top edge of the profile card (it sticks out above it).
- The content inside the right card is left-aligned, with generous padding.

### Colors
| Token | Approx hex | Usage |
|---|---|---|
| Accent gradient start | `#ff991a` (orange) | Download Resume button, active nav tab (left/top) |
| Accent gradient end | `#ec1c08` / `#ee310b` (red-orange) | right/bottom end of the same gradient |
| Mid accent | `#f55c11` | middle of the active nav button |
| Title underline | thin line, about 1–2px, gradient orange `#fbaa6d` → red-orange | after "ABOUT ME", "Resume", "Portfolio" and under project titles |
| Active filter text | red-orange `#ef4a2a`-ish | active filter tab in Portfolio |
| Page bg | `#f2f5f9` | frame background, contact info box inside profile card |
| Card | `#ffffff` | profile card, content card |
| Peach card | `#ffebd1` / `#ffe3bf` | "What I do" cards (Analyze Needs, Evaluate & Refine), timeline cards, portfolio cards |
| Light blue card | `#f2f7fc` | "What I do" cards (Design Solutions, Develop & Execute) — checkerboard alternating with peach |
| Timeline cards fade | `#ffe3bf` → `#ffeed9` → `#fff6eb` | each lower education/experience card is lighter (like a top-to-bottom gradient/fade) |
| Nav inactive button | `#e1e8ef` | grey square buttons |
| Tag chip | bg about `#e9eef3` with a hairline border, text dark grey `#383a3c` | skills chips |
| Skills strip bg | `#f8fbfb` (near white, slightly grey) | bottom band of the resume card |
| Text primary | near-black `#111` / `#1a1a1a` | headings, names |
| Text secondary | grey `#8a8a8a` | subtitle under name, small labels (Phone/Email/Location), dates |
| Icons | orange-red outline icons (phone, envelope, pin, section icons) | |

### Typography
- A geometric sans-serif throughout, looking like **Poppins** (round "a", wide letters). Body text is small and light (about 10–12px at 1440 width). Headings are regular weight, large and airy.
- "ABOUT ME" is all caps (about 32px, regular, slight letter-spacing). "Resume" and "Portfolio" are title case (about 32px regular).
- Section headings ("What I do!", "Education", "Experience") are about 20–24px, medium.
- Card titles are about 13–14px semibold. Body text is about 10–11px regular, line-height about 1.5.
- The name "Michal Kleinboim" is about 18–20px semibold. The subtitle is two lines in light grey, about 11px.

### Components
- **"MK" logo:** handwritten black marker/brush lettering "MK" (the M and K joined, with the K's strokes crossing). It sits top-left about 48px from the edges and is about 50px wide. It is an image/SVG, not a font.
- **Profile card (shared, described once — see section 2.0).** Square photo with rounded corners (about 110px), centred and overlapping the card's top. Name, then the two-line title. Below that, an inner rounded box (`#f2f5f9`) with 3 rows separated by thin dividers. Each row has an icon on the left, a small grey label and dark value text. Last comes the Download Resume button.
- **Download Resume button:** pill shape, orange→red horizontal gradient, white small text "Download Resume" with a download (arrow-into-tray) icon on the left. About 100 x 24px at this zoom (about 160 x 36 at full size).
- **Top nav:** a white/very light rounded container with a hairline border (about 270 x 55), right-aligned above the content card. It holds 3 square rounded buttons (about 44px) with an icon above a tiny label: **Home** (house icon), **Resume** (document icon), **Work** (briefcase icon). Active = orange→red gradient fill with white icon and label. Inactive = `#e1e8ef` fill with dark grey icon and label.
- **Page title row:** big title, then a thin gradient horizontal line to its right (about 140px long, vertically centred).
- **Filter tabs (Portfolio):** plain text links in a row: `All  Courseware  Onboarding  Videos  Marketing`. Small (about 11px), grey-blue. The active tab is red-orange text with no background or underline.
- **Portfolio card:** about 190 x 80 (at this zoom). Peach gradient background (`#ffe3bf` → `#ffeed9`), rounded about 4–6px. The image thumbnail fills the top with a small inset (about 4px) and slightly rounded corners. Below it: a tiny grey category label (e.g. "Courseware"), then the title in about 10–11px dark text. The grid has 2 columns, cards stacked in columns (the left column has 3 cards, the right has 2; the heights are uneven/masonry-like).
- **Project detail layout:** inside the content card, the Portfolio title and filter tabs stay at the top (no tab highlighted on most detail pages; on the Maytronics detail "Onboarding" stays highlighted). Then the **project title** (about 16px semibold) with a gradient underline below it (about 140px), then a two-column body:
  - **Left (about 55%):** "About the Project" (bold small heading) + paragraph, "The Process" + paragraph, "Tools" + a tool list.
  - **Right:** "The Product" (bold small heading, centred) + media.
  - Some projects have no right column and put media under the text instead ("Click on the videos" / "Click here").
- **Media frame (video player):** black video area inside a peach (`#ffebd1`) padded frame. Below it, on the right inside the frame: "Full Screen" + an expand icon (four corner arrows). There is a small grey caption under the frame.
- **Expanded media frames:** separate frames showing only the MK logo + a large peach-framed media area filling the content area (the full-screen state).
- **"What I do" cards:** a 2x2 grid of rounded cards (about 8px radius). Each has a small orange-red line icon + a bold title on one row, then a paragraph. Peach and light-blue backgrounds alternate as a checkerboard.
- **Resume timeline cards:** peach rounded rectangles. Each shows a grey date range (small), a bold title, and an institution (regular). Each card is lighter than the one above.
- **Skill chips:** small rounded rectangles with a light grey fill and tiny dark text, arranged in a wrap grid.

---

## 2. Page-by-page verbatim transcription

### 2.0 Shared profile card (every frame)
- Photo: a woman with long dark-brown hair, chin resting on her hand, green top, city/building background. Square crop with rounded corners.
- Name: **Michal Kleinboim**
- Subtitle (2 lines, grey): `Learning & Development` / `Instructional Design Specialist`
- Contact box:
  - (phone icon) `Phone` / `050-3478599`
  - (envelope icon) `Email` / `Michal.Kleinboim@gmail.com`
  - (location-pin icon) `Location` / `Petach Tikva`
- Button: `Download Resume` (download icon)

### 2.0b Shared top nav
`Home` (house icon) · `Resume` (document icon) · `Work` (briefcase icon). On the Landing Page, Home is active. On the Resume Page, Resume is active. On all Work/portfolio/project frames, Work is active.

---

### 2.1 Landing Page (frame "Landing Page") — sources: 00_landing_resume_zoom.png, 01_landing.png, 02_resume.png (top)

**ABOUT ME** (with gradient line)

> I'm a Learning and Development professional with a strong technological sense,
> effective problem-solving abilities, and a strategic mindset.
> With over five years of experience, I lead end-to-end L&D initiatives aligned with business priorities.
> I collaborate with cross-functional and global teams, leveraging advanced technologies
> to turn ideas into scalable execution and impactful employee experiences.

(The line breaks shown are the design's line breaks; it is one paragraph.)

**What I do!**

| Card | Icon | Bg | Text |
|---|---|---|---|
| **Analyze Needs** | magnifying glass | peach | I start by analyzing organizational needs and performance gaps. This involves understanding business goals, target audiences, and the desired impact. A thorough, systemic needs analysis ensures that every initiative is strategically aligned, focused, and capable of driving real organizational change. |
| **Design Solutions** | ruler/pencil (design tools, crossed) | light blue | I create comprehensive learning and development programs aligned with identified needs. By designing interactive workflows, onboarding journeys, and scalable training structures, I ensure a seamless employee experience that fosters engagement and improves performance. |
| **Develop & Execute** | rocket/hand-drawn launch icon | light blue | I bring strategic ideas to life by developing scalable digital learning products, including interactive courseware, videos, and resources. I leverage advanced multimedia elements and AI tools to optimize production, streamline complex processes, and deliver high-quality, engaging content. |
| **Evaluate & Refine** | glasses/feedback icon | peach | I continually evaluate and refine learning experiences. By gathering feedback, analyzing outcomes, and conducting quality assurance reviews, I drive continuous improvement and ensure our solutions successfully meet and exceed organizational objectives. |

Grid: row 1 = Analyze Needs (left, peach), Design Solutions (right, blue). Row 2 = Develop & Execute (left, blue), Evaluate & Refine (right, peach).

---

### 2.2 Resume Page (frame "Resume Page") — sources: 00, 01, 02, 03, 04, 05, 09

**Resume** (with gradient line)

**Education** (graduation-cap icon, orange)
1. `2024` — **Graphic Design Course** — Hacker U
2. `2021-2023` — **Educational Technologies M.A** — Kibbutzim College
3. `2017-2021` — **Teaching English as a Foreign Language** — Kibbutzim College

**Experience** (briefcase icon, orange)
1. `2026-present` — **Digital Instructional Designer** — Ofek Array - Instruction department, El Al security section
2. `2025 - 2026` — **Instructional Designer Specialist** — G-NESS Company, on-site at the Israel Fire and Rescue Authority
3. `2022 - 2025` — **Instructional Designer & Projects Lead** — T.more - Advanced Learning Solutions

(The two timelines are side by side, Education left and Experience right, 3 cards each.)

**Bottom strip** (full width of the card, slightly grey bg), 3 columns:

- **Work Skills** (chips in 3 columns x 4 rows, read row by row):
  `Storyline` `After Effects` `Photoshop`
  `Illustrator` `Create Studio` `Figma`
  `Genially` `Camtasia` `Moodle`
  `Blossom` `Vyond` `AI`
- **Soft Skills:**
  `Time Management` `Mentorship`
  `Impeccable Communication`
  `Research` `Writing` `Flexibility`
- **Languages:**
  `Hebrew - Native Speaker`
  `English - Excellent`

---

### 2.3 Work page / Portfolio grid (frame "Work page") — sources: 03, 04, 05, 07, 08, 09, 13, 15

**Portfolio** (with gradient line)

Filter tabs: `All` (active, red) · `Courseware` · `Onboarding` · `Videos` · `Marketing`

Grid "All" (2 columns):

| Position | Category label | Title | Thumbnail |
|---|---|---|---|
| Left 1 | Courseware | Cyber Security | Close-up of hands on a keyboard/laptop with a holographic blue/purple digital overlay (cyber theme), purple-blue tones |
| Left 2 | Marketing | Social Media Video | Woman holding up a smartphone filming herself (selfie/vlog), red "LIKE" badge with a thumbs-up on the screen, bright home background |
| Left 3 | Courseware | Academic course | Young woman with glasses looking at a tablet/monitor showing a light-blue "STUDY" illustration (open book with lightbulb), small figurines in the foreground |
| Right 1 | Onboarding | Maytronics - HiTech Company | Exterior of a modern office building with a "maytronics" sign, white parasol, colorful outdoor chairs, green plants (taller card) |
| Right 2 | Videos | AI for Teachers - Microsoft Education | Bald man in a black polo shirt sitting at a laptop in a bright office (taller card) |

Note: the "All" view shows only these 5. **Work Safety**, **Business Website - Raftique Picnic** and **Landing Page - Student Project** do NOT appear under All. They show up only under the Videos / Marketing filters (a probable design inconsistency).

#### Filter states (separate frames)
- **Onboarding** (frames titled "Maytronics", 05, 06, 08, 09, 10): Onboarding active. One card: `Onboarding` / `Maytronics - HiTech Company`.
- **Courseware** (frame "courseware", 08, 13, 14, 15, 17, 18, 19): Courseware active. Cards: `Courseware` / `Cyber Security` and `Courseware` / `Academic course`.
- **Videos** (frames titled "videos"): there are two variants.
  - Variant A (08, 14, 18): `Videos` / `Work Safety` (hard-hat image) and `Marketing` / `Social Media Video` (2 cards stacked in one column).
  - Variant B (15, 19): `Videos` / `Work Safety`, `Videos` / `AI for Teachers - Microsoft Education` (row 1), and `Marketing` / `Social Media Video` (row 2, left).
  - Work Safety thumbnail: a yellow hard hat, black ear-muffs, orange work gloves and safety goggles on a wooden surface.
- **Marketing** (left-column frame, its title is off-screen; 03, 07): Marketing active. Cards:
  - `Marketing` / `Social Media Video`
  - `Marketing` / `Business Website - Raftique Picnic` — styled picnic table from above (cushions, plates, flowers), pink/beige tones
  - `Marketing` / `Landiing Page - Student Project` — **spelled "Landiing" (typo) in the design**. The thumbnail is a close-up of a dumbbell/weight with a blue tint (sports/fitness).

Note the category labels inside cards don't always match the filter: Social Media Video is labelled "Marketing" but also appears under the Videos filter.

---

### 2.4 Project: Maytronics (frame "Maytronics", detail) — sources: 06_maytronics_b.png, 10_videos2.png, 11_videos3.png, 12_videos4.png

Filter tab state: **Onboarding** highlighted.

Title: **Maytronics** (gradient underline)

**About the Project**
> To improve the onboarding experience for new hires at Maytronics, I conducted a comprehensive needs analysis at the company's factory. By collaborating closely with the instructional team, I gained valuable insights into the specific needs and challenges faced by new workers.

**The Process**
> I developed a series of three interactive welcome messages, accessible on both desktop and mobile devices. These messages were designed to welcome new hires and prepare them for their first day of work, fostering a positive and informed start to their journey at Maytronics.

**Tools**
> Genially

**The Product** (right column) — 3 screenshots of Genially presentations:
1. **Landscape (desktop) slide** on top: white with dark-navy curved shapes in two corners. The "maytronics" logo is at top centre. Centre text: **"Managment Team"** ("Managment" bold black, "Team" light grey, typo kept). Below it a teal/light-blue "Start" button. A Genially badge is bottom-left.
2. **Portrait (mobile) screen**, bottom-left: navy border, maytronics logo, "Welcome!" heading, subtitle "I am happy to welcome you onboard!" [mostly unreadable small text], "Dear Friend," + a long letter paragraph [unreadable], a photo of a smiling man in a suit on a light-blue background, signature "Sincerely, Sharon Goldenberg / CEO – Chief Executive Officer" [partly unreadable], then "Exceptional Experience is our motto" and "Click to read about our values" with a teal "+" button. Genially footer.
3. **Portrait (mobile) screen**, bottom-right: maytronics logo, "Upcoming Events" ("Events" in grey), and three teal-outlined circles stacked vertically: **First Day**, **First Month**, **More Events**. Genially footer.

Duplicates: there are 3 "Maytronics" frames. Two are the Onboarding-filter grid (same content; 05/06/09/10) and one is the detail page (06 right, 10 right, 11, 12).

---

### 2.5 Project: Social Media Videos (frame "Social Media videos") — sources: 07 (bottom-left, partial), 13, 16_landing_itself_a.png, 16_landing_itself_b.png (top), 17

No filter tab highlighted.

Title: **Social Media Videos**

**About the Project**
> I created and produced these videos for Facebook marketing campaigns.

**Tools**
> Create Studio

`Click on the videos` (small text label)

Media: 2 video thumbnails side by side (each about 190 x 105, with a slight shadow, no peach frame):
1. Top-down photo: a smartphone (screen showing "9:41", purple/colorful wallpaper) lying on a grey desk next to black glasses and a laptop corner, a green mug at the edge.
2. 3D animated (Create Studio-style) scene: a man in a blue suit at a desk and a cartoon woman in an office, split panels. A pink caption bar at the bottom in Hebrew: **"עכשיו הגיע הרגע שלכם המעסיקים לתכנן אונבורדינג"**

---

### 2.6 Project: Business Website - Raftique (frame "Business website") — sources: 16_landing_itself_b.png, 16_landing_itself_c.png (top), 17 (bottom-left)

Title: **Business Website - Raftique**

**About the Project**
> Managing a private website of a picnic business.
> That includes photo shoots, image editing and developing marketing strategies.

**Tools**
> Wix

`Click here`

Media: one portfolio-style card (peach): the picnic table photo, label `Marketing`, title `Business Website - Raftique Picnic`. Presumably an external link to the website.

---

### 2.7 Project: Landing Page - Student Project (frame "Landing POage") — sources: 16_landing_itself_c.png, 16_landing_itself_d.png

Title: **Landing Page - Student Project**

**About the Project**
> Concept landing page for Nike sports gloves, designed as part of my graphic design studies.

**Tools**
> Figma

`Click here`

Media: one peach card with the blue dumbbell/weight image, label `Marketing`, title `Landiing Page - Student Project` (the typo again in the card). Presumably a link to the Figma/landing page.

---

### 2.8 Project: Cyber Security (frame "cyber security vid") — sources: 14 (partial), 16_landing_itself_b.png (right, partial), 17, 18, 19, 20

Title: **Cyber Security**

**About the Project**
> To combat the challenge of engaging employees in mandatory cyber security training, I developed an innovative and interactive course-ware. The goal was to transform a traditionally dry and monotonous topic into an engaging learning experience.

**The Process**
> A key element of the course-ware was the inclusion of point-of-view videos featuring real employees.
> By writing scripts, managing the director, actors, and production schedule, I ensured that the videos were relatable, authentic, and visually compelling. I even took on the role of an actor to contribute to the production.

**Tools**
> Storyline

**The Product** (right column): a video player. A black 16:9 area with a tiny white Hebrew title at the top centre, **"לומדת אבטחת מידע"**, and a circular play button in the centre, all inside a peach frame. Below inside the frame, right-aligned: `Full Screen` + expand icon. Caption under the frame (small grey):
> The video shows a part of the courseware X3 speed

**Expanded state** (second "cyber security vid" frame; 14 bottom-right, 18 right, 19 bottom, 20 top-right): only the MK logo + a large peach-framed black video (filling most of the frame) with the same Hebrew title "לומדת אבטחת מידע" and a large outlined white play button. No profile card or nav.

Duplicates: 2 frames, the detail page and the full-screen video view.

---

### 2.9 Project: Academic Course (frame "Academic COurse") — sources: 16_landing_itself_c.png (right, text cut at the frame edge), 16_landing_itself_d.png, 20_ai_teachers.png (bottom)

Title: **Academic Course**

**About the Project**
> Adapted a traditional, in-person Judaism course ("Love Thy Neighbor As Thyself") at HIT into enga[ging] online courseware. The courseware provides in-d[epth] analysis of biblical verses, exploring multiple interpretations and contexts.

**The Process**
> Collaborated with a professor at the collage. The challenge was to transition a debate-heavy cour[se] into an engaging digital learning experience. The resulting courseware not only effectively convey[ed] the core content but also stimulated critical think[ing] through interactive elements. To assess student learning, I integrated a short assessment directly [into] the Moodle course website.

("collage" is spelled that way in the design. The frame's right edge was cut off in every screenshot, so the bracketed parts are my inferred completions, not text I could see. There may be more words at the line ends that are hidden.)

**Tools**
> Storyline, Video editing tools

**The Product** (right column): a Storyline course title screen in a peach frame. Light lavender-grey background with a white cloud shape top-left. Centred dark-purple bold Hebrew text over two lines:
> **ברוכים הבאים וברוכות הבאות**
> **ליחידה "ואהבת לרעך כמוך".**

Below it, a white rounded button with a dark outline/shadow: **התחלה**. (A "Full Screen" control was not visible; the bottom of the frame is hidden by the Figma sign-up banner.)

**Expanded state** (second "Academic COurse" frame, 20 bottom-right): MK logo + a large peach-framed version of the same title screen (Hebrew text + "התחלה" button).

Duplicates: 2 frames, the detail page and the full-screen product view.

---

### 2.10 Project: AI for Teachers - Microsoft Education (frame "AI for teachers") — source: 16_landing_itself_d.png (right edge only; the frame is cut off at the screenshot edge)

Under the filter tabs, a gradient underline appears **with no title text above it** (the main title slot is empty in the design). Then a sub-heading:

**AI for Teachers - Microsoft Education**
> Developed and produced a video series for Micro[soft] Education IL, specifically designed to promote th[e] integration of AI tools among teaching staff. The series was published during AI Week initiative of [t]he Ministry of Education, through the Ministry's digit[al] platform.

**The Process**
> I was responsible for leading the project from th[e] initial marketing concept through final visual execution, meeting high institutional standards. The central challenge was creating compelling, h[igh-]quality promotional content that simultaneously motivated teacher adoption and delivered valu[able] foundational knowledge on AI integration.

**Tools**
> Adobe Premiere Pro, After Effects, Illustrator, Cha[unreadable — cut off; likely "ChatGPT" …]

Square-bracketed completions mark text cut off at the right edge of the screenshot (inferred, not seen). There may be more text after "valu…" on the same lines that wasn't captured. **Media: not visible.** The right half of this frame is outside every screenshot, so whether there is a "The Product" column is unknown.

---

### 2.11 Project: Work Safety (frame "videos", detail) — sources: 10_videos2.png (bottom-right, partial), 11 (bottom, partial), 12_videos4.png (bottom-left)

Title: **Work Safety**

**About the Project**
> These two videos were created for a work safety coursware. They were made according to law regulations.

("coursware" is spelled that way.)

**Tools**
> Vyond

Media: below Tools, the tops of **two peach cards** are visible side by side (the two videos). Their content is cut off at the screenshot bottom, so the thumbnails are [not visible]. There is no right "The Product" column.

**Expanded state** (another "videos" frame, 12 right): MK logo + a large peach-framed video showing a Vyond 2D cartoon office scene: grey ceiling with fluorescent lights, a red fire alarm/sprinkler on the ceiling, grey cubicle partitions, orange walls, and four cartoon office workers (a man with stacks of paper, a man in a suit, a blonde woman, a man at a desk). The bottom is cut off.

---

## 3. Media placeholders summary (for the developer)

| Project | Media type | Placeholder spec |
|---|---|---|
| Maytronics | 3 static screenshots (Genially) | 1 landscape 16:9 slide on top (about 140 x 80), 2 portrait phone screens (about 55 x 115) below, side by side, all with a slight shadow, in a right "The Product" column |
| Social Media Videos | 2 clickable video thumbnails | 2 side-by-side about 16:9 images ("Click on the videos" label above), slight shadow, no frame |
| Business Website - Raftique | 1 clickable card | a portfolio card (peach, image + "Marketing" + title) under "Click here", links out to the site |
| Landing Page - Student Project | 1 clickable card | same as above, with the dumbbell image |
| Cyber Security | embedded video + full-screen | a peach frame around a black 16:9 video with a play icon, "Full Screen" + expand icon bottom-right, caption below; plus a full-screen modal/page |
| Academic Course | interactive course screen (Storyline) + full-screen | a peach frame around a 16:9 title-screen image (Hebrew welcome + "התחלה" button); plus a full-screen view |
| AI for Teachers | unknown (not captured) | — |
| Work Safety | 2 videos (Vyond) + full-screen | two peach-framed video cards side by side under the text; full-screen view of the Vyond office animation |

---

## 4. Portfolio projects and categories

| # | Project (card title as shown) | Category label on card | Appears under filter(s) | Detail frame title |
|---|---|---|---|---|
| 1 | Cyber Security | Courseware | All, Courseware | "cyber security vid" (+ full-screen) |
| 2 | Academic course | Courseware | All, Courseware | "Academic COurse" (+ full-screen) |
| 3 | Maytronics - HiTech Company | Onboarding | All, Onboarding | "Maytronics" |
| 4 | Social Media Video | Marketing | All, Videos, Marketing | "Social Media videos" (detail title "Social Media Videos") |
| 5 | AI for Teachers - Microsoft Education | Videos | All, Videos (variant B) | "AI for teachers" |
| 6 | Work Safety | Videos | Videos only | "videos" (detail + full-screen) |
| 7 | Business Website - Raftique Picnic | Marketing | Marketing only | "Business website" (detail title "Business Website - Raftique") |
| 8 | Landiing Page - Student Project (typo) | Marketing | Marketing only | "Landing POage" (detail title "Landing Page - Student Project") |

Filter tabs in order: **All · Courseware · Onboarding · Videos · Marketing**

### Frame inventory / duplicates
- Landing Page — 1 frame
- Resume Page — 1 frame
- Work page (All) — 1 frame
- Marketing filter — 1 frame (its title is off-screen)
- courseware (filter) — 1 frame
- Maytronics — 2 frames with the Onboarding filter grid (identical) + 1 detail
- videos — Videos filter in 2 variants (2 cards vs 3 cards) + Work Safety detail + Work Safety full-screen video
- Social Media videos — detail
- Business website — detail
- Landing POage — detail
- cyber security vid — detail + full-screen video
- Academic COurse — detail + full-screen product
- AI for teachers — detail (only partly captured)

### Unreadable / uncertain
- Maytronics phone-screen body text (the welcome letter) is too small to read. Only the headings and the CEO caption were partly readable.
- AI for Teachers: the right edge of the text and the whole media column were not captured. The Tools list ends at "Cha…".
- Academic Course: a few line-ending words were completed from partly visible letters (see the note in 2.9).
- Work Safety: the two video card thumbnails were not visible.

---

## Addendum — AI for Teachers (full capture: 21_ai_teachers_full.png)

Main title slot is empty (only the gradient underline). Sub-heading: **AI for Teachers - Microsoft Education**

> Developed and produced a video series for Microsoft Education IL, specifically designed to promote the integration of AI tools among teaching staff. The series was published during AI Week initiative of the Ministry of Education, through the Ministry's digital platform.

**The Process**
> I was responsible for leading the project from the initial marketing concept through final visual execution, meeting high institutional standards. The central challenge was creating compelling, high-quality promotional content that simultaneously motivated teacher adoption and delivered valuable, foundational knowledge on AI integration.

**Tools**
> Adobe Premiere Pro, After Effects, Illustrator, ChatGPT for scripting

**The Product** (right column): peach media frame with a video still: a bald man in a black polo at a laptop in a bright office, with "Full Screen" + expand icon.
