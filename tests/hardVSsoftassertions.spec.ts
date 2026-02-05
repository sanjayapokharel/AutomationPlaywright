import {test, expect} from '@playwright/test';



test('hard assertion', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");


    //Hard Assertions(If any of the assertions fails, rest of the assertions will not execute.)
    await expect(page).toHaveTitle('Demo Web Shopss2');// fails and rest assertion will not continue.
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')
    await expect(page.locator('img[alt="Tricentis Demo Web Shop"]')).toBeVisible()
    await page.waitForTimeout(5000);
});


test('soft assertion', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");


    //Soft Assertions(If any of the assertions fails, rest of the assertions will continue to execute.)
    await expect.soft(page).toHaveTitle('Demo Web Shopss2');// fails and rest assertion will continue.
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/')
    await expect.soft(page.locator('img[alt="Tricentis Demo Web Shop"]')).toBeVisible()
    
    
    await page.waitForTimeout(5000);
});