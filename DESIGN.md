---
name: Lewis Sawe Portfolio
description: Cloud engineer portfolio proving real infrastructure work
colors:
  primary: "#0f766e"
  primary-light: "#14b8a6"
  primary-subtle: "#f0fdfa"
  primary-border: "#99f6e4"
  surface-base: "#f8fafb"
  surface-raised: "#ffffff"
  surface-sunken: "#f1f4f6"
  ink-primary: "#1a2332"
  ink-secondary: "#4a5568"
  ink-muted: "#718096"
  ink-faint: "#a0aec0"
  border-default: "#e2e8f0"
  border-hover: "#5eead4"
  accent-error: "#dc2626"
  accent-warning: "#d97706"
typography:
  display:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.025em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  section-y: "clamp(4rem, 8vw, 6rem)"
  card-internal: "1.5rem"
  grid-gap: "1.5rem"
  element-gap: "0.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#115e59"
    textColor: "#ffffff"
  card-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-internal}"
  tag-default:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "#115e59"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  tag-neutral:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  nav-link-active:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
---

# Design System: Lewis Sawe Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Desk"**

A light, confident portfolio that reads like a well-organized workspace: everything in its place, nothing decorative without function, the work itself as the centerpiece. The aesthetic is a working engineer's portfolio, not a cyberpunk movie set or a SaaS landing page. Light surfaces keep the focus on content. Teal accent acts as the single signal color, used with commitment on interactive elements and key headings.

The system explicitly rejects the previous cyberpunk template (particle backgrounds, glitch text, matrix loading screens, terminal-themed everything) and the broader category of generic AI-generated developer portfolios. It also rejects certification badge walls, SaaS hero-metric layouts, and overproduced agency parallax.

**Key Characteristics:**
- Light theme with warm off-white base (#f8fafb) and white raised surfaces
- Satoshi as the display font (geometric sans with personality), system stack for body
- JetBrains Mono for the terminal contact form only
- Left-aligned, asymmetric layout breaking the centered-stack template pattern
- Single teal accent (#0f766e) used with commitment, not sprinkled
- No entrance animations, no particle effects, no loading screen
- Terminal contact form as the sole signature interactive element
- `prefers-reduced-motion` respected globally
- Skip-to-content link, proper ARIA labels, visible focus rings throughout

## 2. Colors

A committed light palette. Teal carries identity on interactive elements and key moments. Neutrals are cool-tinted toward the same hue family for cohesion.

### Primary
- **Infrastructure Teal** (#0f766e): Primary buttons, active nav states, links, the terminal prompt, skill chip text. The single accent color, used at roughly 10-15% of any given screen but with full commitment where it appears.
- **Light Teal** (#14b8a6): Hover escalation on borders, secondary interactive feedback.
- **Subtle Teal** (#f0fdfa): Skill chip backgrounds, active nav backgrounds, code inline backgrounds. The lightest tint.
- **Teal Border** (#99f6e4): Hover borders on cards and interactive elements. Visible but not loud.

### Neutral
- **Base** (#f8fafb): Page background. Warm off-white, not pure white.
- **Raised** (#ffffff): Card backgrounds, raised surfaces. Pure white against the off-white base creates subtle depth without shadows.
- **Sunken** (#f1f4f6): Tag backgrounds, code blocks, secondary surfaces. One step below base.
- **Ink Primary** (#1a2332): Headings, names, strong content. Near-black with a cool tint.
- **Ink Secondary** (#4a5568): Body paragraphs, descriptions. The workhorse reading color.
- **Ink Muted** (#718096): Group labels, dates, secondary metadata.
- **Ink Faint** (#a0aec0): Timestamps, source labels, lowest-priority text.
- **Border Default** (#e2e8f0): Card borders, section dividers. Structural, barely visible.

### Named Rules
**The One Accent Rule.** Teal is the only saturated color in the system. Error red (#dc2626) and warning amber (#d97706) appear only in the terminal contact form's validation states. No other hues.

## 3. Typography

**Display Font:** Satoshi (from Fontshare) with system sans-serif fallback
**Body Font:** System sans-serif stack (ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial)
**Mono Font:** JetBrains Mono (from Google Fonts) for the terminal contact form only

**Character:** Satoshi gives the headings geometric confidence without the genericness of Inter or DM Sans. It's not on the reflex-reject list and carries enough personality to distinguish the site from system-font-only portfolios. The system body stack keeps body text fast and native-feeling. JetBrains Mono is scoped strictly to the terminal, reinforcing that the terminal is a special element, not the site's identity.

### Hierarchy
- **Display** (Satoshi 900, clamp(2.25rem, 5vw, 4.5rem), 1.05 line-height, -0.02em tracking): Hero name only. Tight tracking for impact at large sizes.
- **Headline** (Satoshi 700, clamp(1.5rem, 3vw, 1.875rem), 1.2 line-height, -0.01em tracking): Section titles. Left-aligned, plain labels ("About", "Skills", "Projects").
- **Title** (Satoshi 700, 1.125rem, 1.4 line-height): Card headings, project names, experience roles. Ink primary color.
- **Body** (System 400, 1rem, 1.625 line-height): About paragraphs, descriptions, experience bullets. Ink secondary color. Max width 65ch.
- **Label** (Satoshi 500, 0.875rem, 0.025em tracking, uppercase): Skill group headers, eyebrow text above the hero name. Ink muted color.
- **Mono** (JetBrains Mono 400, 0.875rem): Terminal prompt, terminal output, inline code references. Scoped to the contact section.

### Named Rules
**The Two-Font Rule.** Satoshi for display and headings, system stack for body. JetBrains Mono is a functional exception for the terminal, not a third voice. No other fonts.

## 4. Elevation

Flat by default. Depth comes from tonal layering (base → raised → sunken), not shadows. The only shadow in the system is a subtle `shadow-sm` on the terminal contact form to lift it slightly from the page.

### Named Rules
**The No-Shadow Rule.** Cards, buttons, and navigation use border color shifts for hover feedback, not shadow changes. The terminal is the sole exception. If a surface needs to feel elevated, use white (#ffffff) against the off-white base (#f8fafb).

## 5. Components

### Buttons
- **Shape:** Slightly rounded (6px radius)
- **Primary:** Solid teal background (#0f766e), white text, Satoshi medium 0.875rem. Padding: 12px 24px.
- **Hover:** Darker teal (#115e59). Transition: 200ms colors.
- **Focus:** 2px teal outline with 2px offset. Visible on keyboard navigation.

### Cards (Projects, Videos)
- **Corner Style:** 8px radius
- **Background:** White (#ffffff)
- **Border:** 1px solid #e2e8f0 at rest
- **Hover:** Border shifts to teal-300 (#5eead4). No shadow, no scale, no gradient.
- **Internal Padding:** 24px (1.5rem)

### Skill Chips
- **Style:** Teal-tinted background (#f0fdfa), teal-800 text (#115e59), 1px teal-200 border (#99f6e4), 6px radius
- **No interactive states** (display-only)

### Neutral Tags
- **Style:** Sunken background (#f1f4f6), muted text (#718096), 4px radius
- **Used for:** Project tech tags, blog post tags

### Navigation
- **Fixed top bar**, 56px height, base background at 90% opacity + backdrop blur
- **Bottom border:** 1px solid #e2e8f0
- **Links:** Satoshi 0.875rem medium. Default: ink secondary. Hover: ink primary + sunken background. Active: teal text + teal-50 background.
- **Mobile:** Full-screen overlay on base background, left-aligned links
- **Focus:** 2px teal outline on all interactive elements

### Terminal Contact Form (Signature Component)
The sole distinctive interactive element. A dark terminal window on a light page:
- **Chrome:** macOS-style traffic light dots, dark title bar (#1f2937)
- **Body:** Dark background (#111827), JetBrains Mono, teal prompt characters
- **Input:** Invisible input with teal caret, proper aria-label that changes per step
- **Validation:** Email format check before proceeding. Amber warning text for invalid input.
- **Output:** All user input sanitized through `escapeHtml()` before rendering
- **Visible instructions:** Plain text above the terminal explains how to use it, plus a direct email link as fallback
- **Shadow:** `shadow-sm` only, the sole shadow in the system

### Certifications List
- **Layout:** 2-column grid of compact rows, not a badge wall
- **Style:** White background, default border, name + issuer + year. No images, no hover effects.

### Experience Timeline
- **Layout:** CSS grid with 200px date column + content column on desktop, stacked on mobile
- **Bullets:** Middot (·) prefix in ink-faint, not disc markers

## 6. Do's and Don'ts

### Do:
- **Do** use Infrastructure Teal (#0f766e) as the single accent. Its consistency across buttons, links, active states, and the terminal prompt is the visual identity.
- **Do** keep surfaces flat. White on off-white is the depth model. Border color shifts are the hover model.
- **Do** use Satoshi for all headings and labels. It's the typographic identity. System stack for body only.
- **Do** scope JetBrains Mono strictly to the terminal contact form. Mono elsewhere breaks the two-font rule.
- **Do** respect `prefers-reduced-motion` globally. The current system has no animations, but any future additions must be wrapped.
- **Do** use visible focus rings (2px teal outline, 2px offset) on every interactive element.
- **Do** sanitize all user input before rendering in the terminal. The `escapeHtml()` function is mandatory.
- **Do** provide a direct email fallback alongside the terminal contact form.

### Don't:
- **Don't** use particle backgrounds, glitch text, typing animations, or matrix-style loading screens. Per PRODUCT.md: these are "generic developer portfolio" patterns that read as template.
- **Don't** treat the cyberpunk aesthetic as the brand. Per PRODUCT.md: "Lewis is a professional cloud engineer, not a movie character."
- **Don't** use dark mode. The scene sentence forces light: "A hiring manager opens this link from LinkedIn on a MacBook in a well-lit office at 2pm." Dark mode is wrong for this context.
- **Don't** use shadows for hover feedback. Border color shifts only.
- **Don't** use bounce, elastic, or spring easing on any animation.
- **Don't** center-stack the layout. Left-aligned, asymmetric compositions feel more designed than centered hero + centered cards.
- **Don't** display certifications as a badge wall with images. A compact list with name, issuer, and year communicates the same information with less visual noise.
- **Don't** use `dangerouslySetInnerHTML` with unsanitized user input. All terminal output must pass through `escapeHtml()`.
- **Don't** block content behind loading screens or entrance animations. Per PRODUCT.md: "Respect the visitor's time."
- **Don't** use gradient text, glassmorphism, side-stripe borders, or identical card grids. These are absolute bans from the impeccable skill.
