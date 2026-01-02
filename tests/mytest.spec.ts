import {test, expect} from "@playwright/test";

test('title of the page', async ({page})=>{
   await page.goto('http://www.automationpractice.pl/index.php');
    let title:string = await page.title();
    console.log("Title is: ", title);
   await expect(page).toHaveTitle("My Shop");
})







