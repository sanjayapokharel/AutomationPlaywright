import {test, expect,Locator} from '@playwright/test';




test('Assertions', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(5000);
       
    //1. auto-retry assertions(automatically retries ntil it passes or fails)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    //waits for the element to be visible and have the expected text
    await expect(page.locator('.topic-html-content-header')).toBeVisible();
    await expect(page.locator('.topic-html-content-header')).toHaveText("Welcome to our store");
    await expect(page.locator('div[class="product-grid home-page-product-grid"] strong')).toHaveText("Featured products");
    


    //2. Non Retry Assertions(Executes immediately and no retry)
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy(); // No auto retry

    const welcometext = await page.locator('h2[class="topic-html-content-header"]').textContent();
    expect(welcometext).toContain('Welcome to our store'); // No auto retry



    //Negating matcher (Below cases will fail hence commenting)

    //await expect (page.locator('h2[class="topic-html-content-header"]')).not.toBeVisible(); //auto-retry
    //expect(welcometext).not.toContain('Welcome to our store'); // No auto retry

   

await page.waitForTimeout(5000);
});