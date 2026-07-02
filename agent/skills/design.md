Portfolio Build Spec — Sections 04–07
IDE-Inspired Developer Theme (inherits from existing Hero / 01–03)
Feed this file to Antigravity as build context. It assumes 01 (Tech Stack), 02 (Hero), and 03 (Selected Work) already exist and establish the visual language below — these sections must match, not reinvent.
---
0. Design Tokens (reuse exactly — do not redefine per-section)
```css
:root {
  /* Backgrounds */
  --bg-base: #0B0F17;
  --bg-elevated: #10141F;       /* card surfaces, one step lighter than base */
  --bg-glow: radial-gradient(circle at 50% 0%, rgba(94, 234, 212, 0.08), transparent 60%);

  /* Accent */
  --accent-mint: #5EEAD4;
  --accent-mint-dim: rgba(94, 234, 212, 0.15); /* hover fills, borders */

  /* Text */
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;

  /* Borders */
  --border-subtle: rgba(148, 163, 184, 0.12);
  --border-hover: rgba(94, 234, 212, 0.4);

  /* Fonts */
  --font-heading: 'Inter', 'Space Grotesk', sans-serif;  /* match whatever hero already uses */
  --font-mono: 'Fira Code', 'JetBrains Mono', monospace;
}
```
Section index rule (applies to every section 01–07):
Format is always `NN . SECTION NAME` in `--font-mono`, `--accent-mint`, uppercase, letter-spaced (~0.15em), small size (~13–14px), sits above the section heading.
---
1. Section 04 — Capabilities
Purpose: bridges raw tech stack (01) and finished projects (03) by showing how problems get solved, not just what tools are used.
Layout
Section index: `04 . CAPABILITIES`
3-column grid on desktop → 2-column tablet → 1-column mobile
Cards: `--bg-elevated`, 1px `--border-subtle`, radius ~12px, padding ~28px
Hover: border transitions to `--border-hover`, very subtle upward translate (2–4px), no heavy shadow — keep it flat/IDE-like, not glossy
Card anatomy (repeat 3x)
```
[monospace index, e.g. "A01"]  -- small, --text-muted
[Icon or minimal line-art glyph] -- mint accent, ~28px
[Heading]                       -- sans, --text-primary, ~19px, semibold
[1–2 line description]          -- sans, --text-secondary, ~14px
```
Content pillars (use as-is, these are structural not placeholder):
System Architecture — designing scalable, multi-tenant infrastructure; data migrations (e.g. CRA → Next.js)
Full-Stack Engineering — performant, secure enterprise apps, database layer to UI
SEO Optimization — technical SEO architecture, elite Core Web Vitals, search visibility
---
2. Section 05 — Testimonials
Purpose: social proof; validates role as Web Development Team Lead / Technical Architect.
Layout
Section index: `05 . WHAT COLLABORATORS SAY`
Option A: horizontal marquee (auto-scroll, pause on hover), infinite loop
Option B: static 3-column card grid if marquee feels like too much motion next to Capabilities
Card style matches 04's card (`--bg-elevated`, subtle border) for consistency
Card anatomy
```
" Quote text "                  -- sans, --text-primary, ~16px
—
[Name]                          -- sans, semibold
[Role @ Company]                -- --font-mono, --accent-mint, ~13px (matches "Built for teams at" logo row styling)
```
> ⚠️ **Needs real content.** `CEO @ Delta`, `Product Manager @ Extreme Freelancing` in the original spec are examples, not data. Drop in real client/collaborator quotes before shipping — placeholder or invented quotes will read as fake to technical visitors, which undercuts the exact credibility this section exists to build.
---
3. Section 06 — Background
Purpose: developer-native "About Me" — a Git-branch-style timeline instead of a prose bio.
Layout
Section index: `06 . BACKGROUND`
Vertical timeline, left-aligned "trunk" line in `--accent-mint` at low opacity, with node dots (solid mint) marking each milestone
Matches the git-graph visual language already used on the XIMS project card in section 03 — same line weight, same node style, don't introduce a new graphic language here
Node anatomy (repeat per milestone)
```
[mono commit-style tag, e.g. "feat/lead-dev"]  -- --font-mono, --text-muted, ~12px
[Milestone heading]                             -- sans, --text-primary
[1-2 line description]                          -- sans, --text-secondary
[optional date/year]                            -- --font-mono, --text-muted, ~12px, right-aligned
```
Two timeline tracks to cover:
Professional Experience — agency rebuilds, leading dev teams, independent client contracts
Technical Evolution — foundational web tools → React/Next.js → edge-ready architecture
> Needs your actual milestones/dates — this is your career history, not something to template.
---
4. Section 07 — Contact ("Let's Build Something")
Purpose: the conversion point. Largest typography on the page after the hero.
Layout
Full-width, generous vertical padding (~120px+ desktop)
Section index: `07 . LET'S BUILD SOMETHING` (can also work as the heading itself, large)
Large statement heading mirroring hero's type scale/weight
Components, top to bottom:
Headline — bold, large, sans (e.g. "Let's build something.")
Availability/pricing line — `--font-mono`, `--text-secondary`, small, e.g.:
`Projects from $XXX · Retainers from $XXX/mo` — placeholder amounts, replace with real rates
Primary CTA — solid `--accent-mint` button, dark text on mint, same exact height/padding/radius as the hero's "View work" button (pull those values from 02, don't re-guess them)
Label: "Get in touch" or "Start a Project"
Secondary row — minimal icon links: GitHub, LinkedIn, email (mailto:) — small, `--text-muted`, hover → `--accent-mint`
---
Build notes for Antigravity
Reuse the exact button component from the hero for the CTA — don't create a second button style.
Reuse the exact card shadow/border/radius values across 04 and 05 for visual consistency.
All section indexes (`01`–`07`) should be one shared component with a `number` and `label` prop, not hand-rolled per section.
Mobile-first: collapse grids before adding animation; test marquee behavior on mobile (usually swap to static stack under ~640px).
Before shipping: replace all ⚠️-flagged placeholder content (testimonials, timeline milestones, pricing figures) with real data — nothing generic-sounding should stay in.