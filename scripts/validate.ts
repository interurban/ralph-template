import { execSync } from "child_process";

interface Step {
  name: string;
  command: string;
}

const steps: Step[] = [
  { name: "Format", command: "npx prettier --check ." },
  { name: "TypeScript", command: "npx tsc --noEmit" },
  { name: "Lint", command: "npm run lint" },
  { name: "Unit Tests", command: "npx vitest run" },
  { name: "E2E Tests", command: "npx playwright test" },
];

const results: { name: string; passed: boolean; duration: number }[] = [];

console.log("\n=== VALIDATION PIPELINE ===\n");

for (const step of steps) {
  const start = Date.now();
  process.stdout.write(`[...] ${step.name}`);

  try {
    execSync(step.command, { stdio: "pipe", cwd: process.cwd() });
    const duration = Date.now() - start;
    results.push({ name: step.name, passed: true, duration });
    process.stdout.write(
      `\r[PASS] ${step.name} (${(duration / 1000).toFixed(1)}s)\n`,
    );
  } catch {
    const duration = Date.now() - start;
    results.push({ name: step.name, passed: false, duration });
    process.stdout.write(
      `\r[FAIL] ${step.name} (${(duration / 1000).toFixed(1)}s)\n`,
    );
  }
}

console.log("\n=== SUMMARY ===\n");

const passed = results.filter((r) => r.passed).length;
const total = results.length;
const totalTime = results.reduce((sum, r) => sum + r.duration, 0);

for (const r of results) {
  console.log(`  ${r.passed ? "PASS" : "FAIL"}  ${r.name}`);
}

console.log(
  `\n  ${passed}/${total} passed in ${(totalTime / 1000).toFixed(1)}s`,
);

if (passed < total) {
  console.log("\n  Validation FAILED. Fix issues above before committing.\n");
  process.exit(1);
} else {
  console.log("\n  All checks passed. Safe to commit.\n");
  process.exit(0);
}
