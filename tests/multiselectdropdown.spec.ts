import {test,expect, Locator} from '@playwright/test';


test("single Select dropdown", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//1. Select option from the dropdown (4 ways)
//await page.locator('#colors').selectOption(['Yellow','red','blue']); //Visible Text
//await page.locator('#colors').selectOption(['Yellow','red','blue']); //Value attribute]);
await page.locator('#colors').selectOption([{label:'Yellow'},{label:'Red'},{label:'Blue'}]); //Value attribute]);



//2. Check Number of options in the dropdown
const dropdownOptions:Locator= page.locator('#colors>option');
console.log("Dropdown values are:",dropdownOptions);
console.log("Number of Dropdown value is",+ await dropdownOptions.count());
await expect(dropdownOptions).toHaveCount(7);


//3. Presence of an option in the dropdown

   const Value:string[] =  (await dropdownOptions.allTextContents()).map(Val=>Val.trim());
   console.log(Value);
   expect(Value).toContain('Yellow');



//Printing all options in the dropdown
for (const vals of Value){
    console.log(vals);

}



await page.waitForTimeout(5000);
});