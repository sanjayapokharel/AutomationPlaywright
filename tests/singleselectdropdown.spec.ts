import {test,expect, Locator} from '@playwright/test';


test("single Select dropdown", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//1. Select option from the dropdown (4 ways)
await page.locator('#country').selectOption('India'); //Visible Text
await page.locator('#country').selectOption({value: 'uk'}); //Value attribute
await page.locator('#country').selectOption({label: 'Australia'});    // Label (Label is same to visible text)
await page.locator('#country').selectOption({index: 3}); //sing index (starts from 0)





//2. Check Number of options in the dropdown
const dropdownOptions:Locator=page.locator('#country>option');
console.log("Number of options in the dropdown: " + await (dropdownOptions).count());
expect (await dropdownOptions.count()).toBe(10);
await expect(dropdownOptions).toHaveCount(10);


//3. Presence of an option in the dropdown
const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
console.log(optionsText);
expect(optionsText).toContain('India');// checkc if Array contains 'India'


//Printing all options in the dropdown

for(const option of optionsText){
    console.log(option);
}

await page.waitForTimeout(5000);
});