# Ralph Iteration Prompt

Read this file at the start of every agent session. It defines one complete iteration.

## Before Starting

1. Read `prd/SUMMARY.md` for project context.
2. Check `STEERING.md` for critical work. If items exist, complete them **in order** before proceeding to regular tasks. Remove each item after completion.
3. Check the last 5 entries in `DEV_LOG.md` for recent work context.

## Iteration Protocol

1. **Read tasks**: Open `tasks/CURRENT.md` and find the next task with status `pending`.
2. **Read the spec**: If the task references a spec file in `specs/`, read it before writing any code.
3. **Check structure**: Read `STRUCTURE.md` to understand the current project layout.
4. **Implement**: Write the code and tests required by the task's acceptance criteria. Keep changes minimal and focused on this single task.
5. **Screenshot (UI tasks only)**: After E2E tests pass, save a screenshot to `screenshots/TASK-{ID}-{description}.png`. Verify the UI looks correct. If debugging, compare against previous screenshots.
6. **Validate**: Run `npm run validate`. This runs TypeScript checks, linting, unit tests, and E2E tests.
7. **Fix failures**: If validation fails, fix the issues and re-run `npm run validate`. Do not proceed until all checks pass. Maximum 3 retry attempts.
8. **Update structure**: If you created or moved directories, update `STRUCTURE.md`.
9. **Commit**: Create a git commit using conventional commit format. Reference the task ID in the commit message (e.g., `feat(TASK-001): add user profile page`).
10. **Update task**: Mark the task as `complete` in `tasks/CURRENT.md`.
11. **Log**: Append a brief entry to `DEV_LOG.md` with the date, task ID, and what was done.
12. **Next Steps**: Follow the specific workflow for your Agent Type below.

---

### If you are Cursor / Cline / Windsurf

After completing a task, output exactly one of these Promise Tags and stop immediately:

- `<promise>TASK-{ID}:DONE</promise>` — Task completed successfully. **Stop immediately after this tag.**
- `<promise>COMPLETE</promise>` — All tasks in `tasks/CURRENT.md` are complete.
- `<promise>BLOCKED:description</promise>` — Technical issue preventing progress.
- `<promise>DECIDE:question</promise>` — Need human input on a decision.

**Hard Rule for Cursor:** ONE task per session. After committing, output the promise tag and STOP. Do not read the next task.

---

### If you are Antigravity

You do not use Promise Tags and you do not stop after one task.
Instead, after completing Step 11, immediately trigger a `task_boundary` tool call to identify the start of the next task in `tasks/CURRENT.md`, and loop back to Step 1.
Continue executing tasks autonomously until there are no `pending` tasks left in `tasks/CURRENT.md`. Use `notify_user` only if you are completely blocked or if explicitly asked for review.

---

## Universal Rules

- Never skip validation.
- Never commit without passing validation.
- If validation fails 3 times, mark the task as `blocked` with a note and stop to ask for help.
- If a task is unclear, stop and ask the user for clarification.
- Prefer small, testable changes over large refactors.
- No `git push`. No git remote changes.
- Follow the code quality standards in `AGENTS.md`.
