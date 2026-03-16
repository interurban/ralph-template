---
name: ralph-iteration
description: Execute a complete Ralph iteration cycle — read task, implement, validate, commit. Use when starting a new development iteration or when the user says "run an iteration" or "do the next task".
---

# Ralph Iteration

Complete workflow for one atomic development iteration.

## Pre-Flight

```
Pre-flight:
- [ ] Read prd/SUMMARY.md for project context
- [ ] Check STEERING.md for critical work (complete before tasks)
- [ ] Check last 5 entries in DEV_LOG.md for recent context
```

If `STEERING.md` has items, complete them first (in order), remove each when done, then proceed.

## Iteration Workflow

```
Iteration:
- [ ] Step 1: Read tasks/CURRENT.md, select next pending task
- [ ] Step 2: Update task status to in_progress
- [ ] Step 3: Read spec (if referenced)
- [ ] Step 4: Read STRUCTURE.md for project layout
- [ ] Step 5: Implement code + tests
- [ ] Step 6: Run npm run validate
- [ ] Step 7: Fix failures (max 3 retries)
- [ ] Step 8: Update STRUCTURE.md if dirs changed
- [ ] Step 9: Commit with task ID
- [ ] Step 10: Mark task complete
- [ ] Step 11: Update DEV_LOG.md
- [ ] Step 12: Output promise tag and STOP
```

## Step Details

**Step 1-3**: Read task and spec. Understand exactly what needs to be built.

**Step 4**: Read `STRUCTURE.md` so you know where files live.

**Step 5**: Implement the task:

- Write production code in `src/`
- Write Vitest unit tests for any logic
- Write Playwright E2E tests for user-facing changes
- Follow code quality standards in `AGENTS.md`

**Step 6**: Run validation:

```bash
npm run validate
```

**Step 7**: If validation fails:

- Read the error output
- Fix the issue
- Re-run validation
- After 3 failures, mark task `blocked` and output `<promise>BLOCKED:reason</promise>`

**Step 8**: If you created or reorganized directories, update `STRUCTURE.md`.

**Step 9**: Commit changes:

```bash
git add -A
git commit -m "type(TASK-XXX): description"
```

**Step 10**: In `tasks/CURRENT.md`, change the task's status to `complete`.

**Step 11**: Append to `DEV_LOG.md`:

```markdown
## YYYY-MM-DD — TASK-XXX: Short description

- What was implemented
- Any notable decisions
```

**Step 12**: Output the promise tag and **stop immediately**:

- `<promise>TASK-XXX:DONE</promise>` — Task completed
- `<promise>COMPLETE</promise>` — All tasks done
- `<promise>BLOCKED:reason</promise>` — Stuck on technical issue
- `<promise>DECIDE:question</promise>` — Need human decision
