---
description: Execute a complete autonomous iteration cycle using Antigravity
---

# Antigravity Autonomous Iteration

Complete workflow for one atomic development iteration natively designed for Antigravity's continuous looping capabilities.

## Pre-Flight

```
Pre-flight:
- [ ] Read prd/SUMMARY.md for project context
- [ ] Check STEERING.md for critical work (complete before tasks)
- [ ] Check last 5 entries in DEV_LOG.md for recent context
```

If `STEERING.md` has items, complete them first (in order), remove each when done, then proceed.

## Continuous Execution Protocol

Unlike Cursor, Antigravity does **not** stop after each task. You must use the `task_boundary` tool to transition between tasks and keep the loop running until `tasks/CURRENT.md` is empty.

For each `pending` task in `tasks/CURRENT.md`:

1. Use `task_boundary` to begin the task. Set TaskName to something descriptive (e.g. "Implementing Login Form").
2. Update the task status to `in_progress` in `tasks/CURRENT.md`.
3. If a spec is referenced, read it. Read `STRUCTURE.md` for layout.
4. Implement code + tests.
5. Run `npm run validate`.
6. Fix any failures (max 3 retries).
7. Update `STRUCTURE.md` if directories changed.
8. Create a conventional commit containing the task ID.
9. Mark the task `complete` in `tasks/CURRENT.md` and log to `DEV_LOG.md`.
10. Immediately begin the next task starting at step 1.

Do not stop until the `CURRENT.md` queue is completely empty. Only use `notify_user` if you are completely blocked or if explicitly asked for review in `STEERING.md` or the spec.
