import {expect,test,Locator} from '@playwright/test';
import { count } from 'node:console';

test("Xpath Axes Demo in Playwright",async({page})=>
{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    
    //Self Axis
    const country:Locator = page.locator("//td[text() = 'Germany']/self::td");
    await expect(country).toBeVisible();
    await expect(country).toHaveText("Germany");

    //Parent Axis
    const parentRow:Locator = page.locator("//td[text() = 'Germany']/parent::tr");
    await expect(parentRow).toBeVisible();
    await expect(parentRow).toContainText("Alfreds Futterkiste Maria Anders Germany");
    console.log(await parentRow.textContent());


    //Child Axis
    const SecondRowCells:Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect (SecondRowCells).toHaveCount(3);
 console.log("total second Row Cells are:", await SecondRowCells.count());

    //Ancestor Axis
    const ancestorTable:Locator = page.locator("//td[text() = 'Germany']/ancestor::table");
    await expect(ancestorTable).toHaveAttribute("id","customers");

    //Descendant Axis
    const descendant:Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(descendant).toHaveCount(18);

    //Following Axis
    const followingOnly:Locator = page.locator("//td[text() = 'Germany']/following::td[1]");
    await expect(followingOnly).toHaveText("Centro comercial Moctezuma");

    //Following-Sibling Axis
    const rightSibling:Locator = page.locator("//td[text() = 'Germany']/following-sibling::td");
    await expect(rightSibling).toHaveCount(0);

    //Preceding Axis
    const precedingOnly:Locator = page.locator("//td[text() = 'Germany']/preceding::td[1]");
    await expect(precedingOnly).toHaveText("Maria Anders");

    //Preceding-Sibling Axis
    const leftSibling:Locator = page.locator("//td[text() = 'Germany']/preceding-sibling::td");
    await expect(leftSibling).toHaveCount(2);
    await expect(leftSibling.nth(0)).toHaveText("Alfreds Futterkiste");
    await expect(leftSibling.nth(1)).toHaveText("Maria Anders");



});
//if (test is passed) {
  //  console.log("All tests passed");
//})