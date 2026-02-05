import {test, expect, Page} from '@playwright/test';

test("Popup handle",async({browser})=>{
    test.setTimeout(30000);
    //const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //Mltiple popups:

   // context.waitForEvent('popup')
   // page.getByText("Popup Windows").click();

    await Promise.all([page.waitForEvent('popup'),page.waitForEvent('popup'),page.getByText("Popup Windows").click()]);
     await page.waitForTimeout(5000);
    const allPopUpWindows = context.pages();
    console.log ("all child popup are with total Number:",allPopUpWindows.length);
   


    console.log(allPopUpWindows[0].url());//parent
    console.log(allPopUpWindows[1].url()); //child 1
    console.log(allPopUpWindows[2].url()); //child 2


    for(const pw of allPopUpWindows){
        const title = await pw.title();

        if(title.includes("Playwright")){
            await pw.locator('.getStarted_Sjon').click();
            await page.waitForTimeout(5000);
            //perform any other actions and close
            await pw.close();
        }        
        
    }
await page.waitForTimeout(5000);
});