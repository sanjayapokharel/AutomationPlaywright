import {expect, test, Locator} from '@playwright/test';

test("Text Input Action", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name:Locator = page.locator("#name");
    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();


    

});