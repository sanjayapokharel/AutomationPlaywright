import {test, expect} from "@playwright/test";

test('url of the page', async ({page})=>{
   await page.goto("http://www.automationpractice.pl/index.php");
    let URL:string = await page.url();
    console.log("URL is:", URL);
   await expect(page).toHaveURL("http://www.automationpractice.pl/index.php");
})







