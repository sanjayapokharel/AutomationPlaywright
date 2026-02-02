import {test, expect,Locator} from '@playwright/test';



test('Autowaiting and Forcing', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    //test.setTimeout(60000);
    test.slow(); //Triple the timeout
    //Assertions: Autowait works (Default time is 5 sec)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    await expect(page.locator('.topic-html-content-header')).toBeVisible({timeout:10000});
    await expect(page.locator('.topic-html-content-header')).toHaveText("Welcome to our store");
    
    
    //Actions: Autowait works (Default time is 30 sec)
    await page.locator('#small-searchterms').fill("Laptop",{force:true});// forcefully perform action without actionability check. 
    await page.locator(".button-1.search-box-button").click({force:true});

await page.waitForTimeout(5000);
});