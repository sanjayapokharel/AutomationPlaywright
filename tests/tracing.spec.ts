import {expect, test} from '@playwright/test'

test('tracing', async ({ page }) => { // Globally taken screenshot can be added to HTML report
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.locator('#signin2')).toContainText('Sign up');
  await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByRole('link', { name: 'Nokia lumia' }).click();
  await page.waitForTimeout(5000);
  await expect(page.locator('h3')).toContainText('$820 *includes tax',{timeout:10000});
    await page.getByText('Log out').click();

});