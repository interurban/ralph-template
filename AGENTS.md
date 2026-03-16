# Code Quality Standards

Always apply these standards to all code you write.

## Reuse Before Creating

Before writing new code, search for existing utilities, components, hooks, and helpers:

1. **Search first** — grep/glob for similar functionality before implementing
2. **Extend if close** — if something 80% matches, extend it rather than duplicate
3. **Extract if duplicating** — if you're about to copy-paste, extract to a shared module

## File Size and Organization

Keep files under **300 lines**. If a file exceeds this:

1. **Split by responsibility** — one module, one concern
2. **Extract sub-components** — UI pieces that stand alone should be their own files
3. **Separate logic from presentation** — hooks and utils in their own files
4. **Group by feature** — co-locate related files, not by type

## Code Style

- Prefer clear code over comments. Add comments only for non-obvious intent or constraints.
- Use Conventional Commit format for all commits.
- Use TypeScript strict mode. No `any` types without justification.
- Prefer named exports over default exports.

## Testing

If you didn't test it, it doesn't work.

Verify code by:

- Running unit tests (`npm run test:unit`)
- Running E2E tests (`npm run test:e2e`)
- Using the **Browser Subagent** (if running via Antigravity) to visually click through the new feature.
- Checking for type errors (`npx tsc --noEmit`)
- Checking for lint errors (`npm run lint`)
- Or run everything at once: `npm run validate`
