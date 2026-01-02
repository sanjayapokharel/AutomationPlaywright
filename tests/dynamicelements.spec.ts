import { expect,test,Locator } from "@playwright/test";


test("verifying the dynamic Button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i= 1; i<5; i++){
        let button:Locator = page.locator("//button[@name = 'start' or @name = 'stop']")
        await button.click();
        await page.waitForTimeout(2000);
    }



})