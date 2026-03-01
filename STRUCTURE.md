# Project Structure

Update this file when directories change. Excludes node_modules, .next, dotfiles, and test artifacts.

```
src/
  app/
    layout.tsx          # Root layout with metadata and fonts
    page.tsx            # Landing page
    globals.css         # Tailwind base styles and CSS variables
  components/
    ui/
      button.tsx        # shadcn Button component
  lib/
    utils.ts            # cn() utility for class merging
  __tests__/
    utils.test.ts       # Unit tests for utilities

e2e/
  home.spec.ts          # E2E smoke tests for landing page

tasks/
  BACKLOG.md            # All planned work, ordered by priority
  CURRENT.md            # Tasks being worked on this cycle

specs/
  TEMPLATE.md           # Template for feature specifications

prd/
  SUMMARY.md            # Short project overview (read each iteration)

scripts/
  validate.ts           # Full validation pipeline (tsc + lint + unit + e2e)

public/
  next.svg, vercel.svg, etc.   # Static assets
```
