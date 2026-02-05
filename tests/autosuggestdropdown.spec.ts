import {expect, Locator, test} from '@playwright/test';



test("Auto suggest dropdown handling", async({page})=>{
    
    await page.goto("https://www.flipkart.com/");
    await page.locator('input[name="q"]').fill("smart");//search for text
    await page.waitForTimeout(5000);
    // Get all suggested Options --> Ctrl+shift+P on Dom -->Emulatefocused page
   
    const options:Locator = page.locator("ul>li");
 
    const count = await options.count();


    console.log("total count of the locator is :", count);
    await page.waitForTimeout(5000);



    //printing all the suggested option

    //option.nth().innerText();

    for (let i = 0; i < count; i++) {
        const value = await options.nth(i).textContent(); //innerText / textContent can be used here
        console.log("Option values are", value);
    }

    console.log("Option values are with alltextcontent", await options.allTextContents());

// Click on the smartphone option
for (let i = 0; i < count; i++) {
        const value = await options.nth(i).textContent(); //innerText / textContent can be used here
        if(value?.trim() ==="smartphone"){
            await options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(5000);

});