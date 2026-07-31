# PortfolioV2 AI Development Rules

## Project Goal

Build a premium portfolio that feels like an award-winning interactive website while remaining scalable, maintainable and production-ready.

The project should prioritize long-term architecture over short-term speed.

---

# Architecture

Before changing code:

- Understand the entire repository.
- Reuse existing abstractions whenever possible.
- Never duplicate logic.
- Never introduce unnecessary complexity.
- Never create abstractions that will only be used once.

If an existing abstraction can be extended, extend it instead of creating another.

---

# Code Quality

Always:

- Keep components small.
- Keep files readable.
- Avoid deeply nested logic.
- Use meaningful names.
- Prefer composition over duplication.

---

# Theme Engine

The project uses a semantic design engine.

Never hardcode colors inside components.

Always consume semantic theme tokens.

Ocean is the baseline theme and must never visually regress.

---

# UI

Every UI change should:

- feel premium
- feel intentional
- avoid clutter
- maintain visual hierarchy
- preserve spacing consistency

---

# Animation

Animations should:

- be smooth
- subtle
- performant
- never distract from content

Avoid excessive motion.

---

# Responsive Design

Desktop behavior must not regress.

Tablet must be verified.

Mobile must be verified.

No overlapping sections.

No broken layouts.

---

# Accessibility

Maintain:

- keyboard navigation
- focus visibility
- semantic HTML
- contrast
- ARIA where appropriate

---

# Performance

Avoid:

- unnecessary re-renders
- duplicated state
- expensive animations
- large bundle increases

---

# Refactoring

When modifying a file:

- improve existing code
- remove duplication
- preserve functionality

Do not redesign unless explicitly instructed.

---

# Validation

Before considering a task complete:

- Build succeeds
- Lint succeeds
- Existing functionality preserved
- No console errors
- Responsive verification completed

---

# Workflow

For every task:

1. Analyze
2. Plan
3. Implement
4. Validate
5. Summarize

Never skip analysis.

Never modify unrelated files.

If a task affects architecture, explain why.