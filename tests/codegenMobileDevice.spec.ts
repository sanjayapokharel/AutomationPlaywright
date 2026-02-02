import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('link', { name: 'Nokia lumia' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
});