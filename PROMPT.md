# Ralph Iteration Prompt

Read this file at the start of every agent session. It defines one complete iteration.

## Iteration Protocol

1. **Read tasks**: Open `tasks/CURRENT.md` and find the next task with status `pending`.
2. **Read the spec**: If the task references a spec file in `specs/`, read it before writing any code.
3. **Implement**: Write the code and tests required by the task's acceptance criteria. Keep changes minimal and focused on this single task.
4. **Validate**: Run `npm run validate`. This runs TypeScript checks, linting, unit tests, and E2E tests.
5. **Fix failures**: If validation fails, fix the issues and re-run `npm run validate`. Do not proceed until all checks pass. Maximum 3 retry attempts.
6. **Commit**: Create a git commit using conventional commit format. Reference the task ID in the commit message (e.g., `feat(TASK-001): add user profile page`).
7. **Update task**: Mark the task as `complete` in `tasks/CURRENT.md`.
8. **Log**: Append a brief entry to `DEV_LOG.md` with the date, task ID, and what was done.
9. **Stop**: Do not start another task. One task per iteration keeps changes atomic and reviewable.

## Rules

- Never skip validation.
- Never work on multiple tasks in one session.
- If a task is unclear, stop and ask — do not guess.
- If validation fails 3 times, mark the task as `blocked` with a note explaining the failure, and stop.
- Prefer small, testable changes over large refactors.
