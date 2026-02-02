import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await expect(page.locator('#nava')).toMatchAriaSnapshot(`
    - link "PRODUCT STORE":
      - /url: index.html
      - img
      - text: ""
    `);
  await expect(page.locator('#logout2')).toContainText('Log out');
  await page.getByRole('link', { name: 'Log out' }).click();
});