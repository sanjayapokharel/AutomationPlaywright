import {test, expect} from "@playwright/test";

test('title of the page', async ({page})=>{
    await page.goto('http://www.automationpractice.pl/index.php');
      //await page.waitForTimeout(15000);

    test.setTimeout(150000);
  
    let title:string = await page.title();
    console.log("Title is: ", title);
   await expect(page).toHaveTitle("My Shop");
})







