import {test, expect, Page,Locator} from '@playwright/test';


//1st approach modifying the URL
test("Popup handle from URL",async({browser})=>{
    test.setTimeout(30000);
    //const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //https://username:password@the-internet.herokuapp.com/basic_auth
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    
   expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();

await page.waitForTimeout(5000);


});
//2nd approach via passing credentials in context 

test("Popup handle from Context",async({browser})=>{
    test.setTimeout(30000);
    //const browser = await firefox.launch();
    const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const page = await context.newPage();

    //https://username:password@the-internet.herokuapp.com/basic_auth
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    
   expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();

await page.waitForTimeout(5000);


});