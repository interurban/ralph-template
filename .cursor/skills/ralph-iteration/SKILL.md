---
name: ralph-iteration
description: Execute a complete Ralph iteration cycle — read task, implement, validate, commit. Use when starting a new development iteration or when the user says "run an iteration" or "do the next task".
---

# Ralph Iteration

Complete workflow for one atomic development iteration.

## Workflow

Copy this checklist and track progress:

```
Ralph Iteration:
- [ ] Step 1: Read PROMPT.md
- [ ] Step 2: Read tasks/CURRENT.md, select next pending task
- [ ] Step 3: Read spec (if referenced)
- [ ] Step 4: Implement code + tests
- [ ] Step 5: Run npm run validate
- [ ] Step 6: Fix failures (max 3 retries)
- [ ] Step 7: Commit with task ID
- [ ] Step 8: Mark task complete
- [ ] Step 9: Update DEV_LOG.md
```

## Step Details

**Step 1**: Read `PROMPT.md` to refresh the iteration protocol.

**Step 2**: Open `tasks/CURRENT.md`. Find the first task with `Status: pending`. Update it to `in_progress`.

**Step 3**: If the task has a `Spec` field, read that file for context.

**Step 4**: Implement the task:
- Write production code in `src/`
- Write Vitest unit tests for logic
- Write Playwright E2E tests for user-facing changes
- Keep changes focused on this single task

**Step 5**: Run validation:
```bash
npm run validate
```

**Step 6**: If validation fails:
- Read the error output
- Fix the issue
- Re-run validation
- After 3 failures, mark task `blocked` and stop

**Step 7**: Commit changes:
```bash
git add -A
git commit -m "type(TASK-XXX): description"
```

**Step 8**: In `tasks/CURRENT.md`, change the task's status to `complete`.

**Step 9**: Append to `DEV_LOG.md`:
```markdown
## YYYY-MM-DD — TASK-XXX: Short description
- What was implemented
- Any notable decisions
```
