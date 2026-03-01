import { test, expect } from '@playwright/test';

test('landing page renders successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ralph/i);
  await expect(page.locator('main')).toBeVisible();

  await page.screenshot({ path: 'screenshots/home-page.png', fullPage: true });
});

test('landing page contains Next.js logo', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByAltText('Next.js logo')).toBeVisible();
});
