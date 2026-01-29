import{test,expect, Page, webkit, firefox, chromium} from '@playwright/test';


test("self browser declaration", async()=>{
    const browser = await firefox.launch();
    const context = await browser.newContext();

//creating New Page
    const page1 = await context.newPage();
 const page2 = await context.newPage();

    //total pages count
    console.log("Total pages are:",context.pages().length);


    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    await page2.goto("https://selenium.dev/");
    await expect(page2).toHaveTitle("Selenium");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
});