

import {Locator} from "@playwright/test";
import{test, expect} from "@playwright/test";

test("Verify Playwright Locators", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
   
   
//   1.  Identified Images and Texts on the Page Using Locators
    const logo:Locator = page.getByAltText("nopCommerce demo store");
     await expect(logo).toBeVisible();
    
    
//   2. Identified Non Interactive texts on the Page Using Locators
    
  //  const text:Locator = page.getByText("Welcome to our store");
   // await expect(text).toBeVisible();

    await expect(page.getByText("Welcome to our store")).toBeVisible();
    await expect(page.getByText(/Welcome\s+to\s+Our\s+Store/i)).toBeVisible(); 
    //Regular Expression to ignore case sensitivity and extra spaces


//   3. Identified Link on the Page Using Locators

 //   await page.getByRole("link",{name:"Register"}).click();
  //  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
  //  await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();


//   4. Identified form on the Page Using Locators
  //  await page.getByLabel("First Name").fill("John");
   // await page.getByLabel("Last Name").fill("Kenedy");
    //await page.getByLabel("Email").fill("john.kenedy@example.com");
    //await page.getByLabel("Password").fill("John@1234");
    //await page.getByLabel("Confirm password").fill("John@1234");
 //  5. Identified Placeholder on the Page Using Locators

    await page.getByPlaceholder("Search store").fill("Apple MacBook Pro");


//6. Identified title on the Page Using Locators
    await expect (page.getByTitle("Search")).toHaveText("Search");

//7. Identified title on the Page Using Locators
    await page.getByTestId("newsletter-email").fill("test");





});