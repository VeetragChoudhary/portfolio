# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers scanning quickly to decide whether to reach out for a backend / AI-ML role or internship. They spend seconds per portfolio and are judging both the work shown and the craft of the site itself as a signal of competence.

Secondary: technical peers or hiring-panel engineers who click through to individual projects for depth (architecture, stack, live links).

## Product Purpose

A single-page personal portfolio for Veetrag Choudhary that gets a recruiter to a "let's talk" decision fast. It exists to prove hire-worthiness, not to document everything — success is a reach-out or an interview, not a page-view.

## Positioning

The claim the portfolio must make truthfully copyable by no one else: Veetrag can take an idea to a production system independently — concept, build, and deploy — without needing heavy hand-holding. Evidence for this is the shipped project set (ContextMemory, AIxAI, HomeSage), not claims of the skill in prose.

## Operating Context

- Single long-scroll page, no routing: Header/hero → About → Experience → Skills → Projects → Education → Contact, with a persistent bottom floating dock (Home / GitHub / LinkedIn / X / theme toggle).
- Dark mode is implemented (class strategy + localStorage + `prefers-color-scheme`) and must keep working in any redesign.
- Viewed primarily by someone skimming on desktop during a hiring search, occasionally on mobile.

## Capabilities and Constraints

- Stack: Vite + React 19 + TypeScript, Tailwind CSS v4, `lucide-react` icons. No routing library, no animation library, no backend/CMS — all content is hardcoded in components.
- Confirmed: a resume/CV download belongs on the site. The PDF file is user-supplied and does not exist in the repo yet; the UI must not ship a dead link.
- Undecided: whether to replace the generated SVG project covers with real screenshots (covers currently stand in by explicit prior decision).

## Brand Commitments

- Name: Veetrag Choudhary.
- **Confirmed positioning: Backend Engineer with AI/ML depth.** Backend leads (matching the Krane apps internship title and the Skills section); AI/ML is the specialization, not the headline. The site currently contradicts this in three places — "Backend Developer" (hero), "AI/ML Engineer" (About), and "backend engineering roles, freelance projects, and collaboration" (Contact) — and must be unified to the confirmed framing.
- Prior employer: Krane apps (Backend Intern, Jan–May 2026), logo asset at `src/assets/logo.png`.
- Accent color in use: amber/orange (`#d97706` family), pulled from the Krane logo, used sparingly against a neutral gray palette in both themes.

## Evidence on Hand

- Real shipped projects with live links: ContextMemory (contextmemory.ai, PyPI package), AIxAI (aixai.dev, GitHub source), HomeSage (homesage.ai, GitHub source).
- Real work experience: Krane apps, Backend Intern, Jan 2026–May 2026.
- Education: Bachelor of Computer Applications, Maharshi Dayanand Saraswati University, Ajmer (2022–2025).
- Stated responsiveness commitment in Contact copy: "I usually reply within a day."
- No testimonials, press, case studies, or usage metrics exist — none should be fabricated.
- No real project screenshots exist yet (see Capabilities and Constraints).
- No resume PDF is present in the repo yet; it is a user-supplied asset.

## Product Principles

1. Optimize for a few seconds of recruiter attention: lead with proof (real shipped projects, real employer), not adjectives.
2. The site's own UI/UX is itself evidence of competence for a candidate positioned as detail-oriented and production-minded — polish is not decoration here, it's part of the pitch.
3. Preserve working dark mode and the existing scroll-animation/floating-dock interaction patterns unless a redesign explicitly replaces them.
4. Don't invent content (testimonials, metrics, screenshots) to fill visual gaps — solve gaps with layout/typography/generated motifs instead, as already done for project covers.
5. Speak with one voice: every surface says "Backend Engineer with AI/ML depth." Any copy that reverts to a competing title is a regression.

## Accessibility & Inclusion

No project-specific requirement established beyond general web accessibility (semantic HTML, visible focus states, sufficient contrast in both themes) — known gap: no visible `:focus-visible` styling currently exists anywhere in the codebase.
