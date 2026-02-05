import {Locator, expect, test} from '@playwright/test';

test("Hidden Bootstrap Dropdown Handling", async({page})=>{
    await test.setTimeout(60000);
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator('input[name="username"]').fill("Admin");
await page.locator('input[name="password"]').fill("admin123");
await page.locator('button[type="submit"]').click();

await page.waitForTimeout(5000);



//Click on PIM Module
await page.getByText("PIM").click();

//print all the dropdown options
await page.locator("form i").nth(2).click();
await page.waitForTimeout(5000);

    const dropdownOptions:Locator= page.locator('div[role="listbox"] span');
 const totalcount:number = await dropdownOptions.count();
 console.log("Total Count is " , totalcount);

 for(let i=0;i<totalcount;i++){
    const OptionsName = await dropdownOptions.nth(i).innerText();
    console.log("Options values are", OptionsName);
    
 }
 //Select the particular dropdown (Job Title Dropdown)

  for(let i=0;i<totalcount;i++){
    if (await dropdownOptions.nth(i).innerText() === "Software Engineer"){
      await dropdownOptions.nth(i).click();
      break;
    }
  }

await page.waitForTimeout(5000);



});