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
12. **Stop**: Output the appropriate promise tag and stop immediately.

## Promise Tags

After completing a task, output exactly one of these tags:

- `<promise>TASK-{ID}:DONE</promise>` — Task completed successfully. **Stop immediately after this tag.**
- `<promise>COMPLETE</promise>` — All tasks in `tasks/CURRENT.md` are complete.
- `<promise>BLOCKED:brief description</promise>` — Technical issue preventing progress (broken deps, env issues, service outages).
- `<promise>DECIDE:question</promise>` — Need human input on a decision (architecture choice, unclear requirements).

## Rules

- **ONE task per session.** After committing, output the promise tag and STOP. Do not read the next task.
- Never skip validation.
- Never commit without passing validation.
- If validation fails 3 times, mark the task as `blocked` with a note, output `<promise>BLOCKED:reason</promise>`, and stop.
- If a task is unclear, output `<promise>DECIDE:question</promise>` and stop.
- Prefer small, testable changes over large refactors.
- No `git push`. No git remote changes.
- Follow the code quality standards in `AGENTS.md`.
