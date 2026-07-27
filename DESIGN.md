# Design

<!-- impeccable:design-schema 1 -->

## Direction contract

**THESIS** — A minimal, classic portfolio built from a few large panes of quiet glass. It refuses decoration: no glow, no gradient-as-ornament, no over-frost. Calm whitespace and one accent do the work. (Supersedes the earlier neomorphic world; glass and neomorphism are opposite materials and are not blended.)

**OWN-WORLD** — Minimal glassmorphism. A quiet ground (light: soft `#f4f3f1` with one faint amber corner wash; dark: near-black `#0c0c0d` with the same faint wash) gives the glass something to refract. Panels are translucent with a restrained `backdrop-blur`, a 1px hairline border, and a subtle lighter top edge. Amber (`#d97706`/`#f59e0b`) is the single accent. Geist Sans + JetBrains Mono. **Low radii (10px), no pills.** Restraint is the rule: blur is gentle, borders are hairline, color is scarce.

**STORY** — Recruiter lands on a calm, classic glass surface, reads quickly, clicks a live project, contacts. A slim glass top navbar (mark + anchors + theme toggle) provides wayfinding.

**FIRST VIEWPORT** — Slim glass navbar, then one large glass identity pane: name/role/positioning/actions left, a quiet status line right. Primary action (Get in touch) is a squared amber-text glass button.

**FORM** — Few large glass panes + slim glass navbar. User-pinned redesign to minimal glassmorphism, both themes. Classic, restrained, recruiter-safe.

## Durable rules

- **Quiet ground + faint wash, per theme.** Light `#f4f3f1`, dark `#0c0c0d`, each with ONE faint amber radial wash so glass has something to refract. Nothing louder.
- **Minimal glass panes.** Translucent fill (`bg-white/60` light, `bg-white/[0.04]` dark) + gentle `backdrop-blur` (~12–16px) + 1px hairline border + a subtle lighter top edge. No heavy frost, no glow, no drop-shadow drama.
- **One accent.** Amber only. Marks the live/active/primary state. No second hue carries regions.
- **Few large panes, not many cards.** 2–4 big glass panes; regions inside separated by hairline rules, not nested cards.
- **Low radii, no pills.** Pane radius ~10px; controls ~8px. Never `rounded-full` on buttons or tags.
- **Slim glass navbar.** Translucent sticky bar: mark left, anchors + theme toggle right.
- **Restraint above all.** When unsure, remove. Whitespace and one accent carry the design; the glass is quiet.
- **Type.** Geist Sans (display + body), JetBrains Mono (data: tags, dates, status, labels). Retained from prior pass.
- **Motion.** Tiles respond to hover/press like physical objects (raise/depress). Honor `prefers-reduced-motion`. Keyboard focus visible (amber ring).
- **Both themes ship.** Light/dark toggle + localStorage + `prefers-color-scheme` preserved.
- **No fabricated content.** Placeholder handles/links/experience stay marked; never invent proof.
