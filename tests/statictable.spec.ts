import { Locator,test,expect } from "@playwright/test";


test("Static Table Handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator = page.locator("table[name = 'BookTable'] tbody");
    await expect(table).toBeVisible();

    //count number of rows in a table
    const rows:Locator = page.locator("table[name = 'BookTable'] tbody tr");

    await expect(rows).toHaveCount(7);  //approach 1 for row count validation
    console.log("Number of rows in the table:",await rows.count());
    expect(await rows.count()).toBe(7); //approach 2 for row count validation


    //chaining of Locators to fetch columns
    const tableheader:Locator = rows.locator("th");
    console.log("Columns in the table:",await tableheader.allInnerTexts());
    const tcount = await tableheader.count();
    console.log("Columns count in the table:",tcount);
    expect(tcount).toBe(4);


});