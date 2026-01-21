import {test, expect, Locator} from '@playwright/test';

test("sorted dropdown test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator= page.locator('#animals>option'); // No duplicate values

   // const dropdownOptions:Locator= page.locator('#colors>option'); // Duplicate values
    console.log(await dropdownOptions.allTextContents());

    const optionText: string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());

    const myset = new Set<string>(); // Set to store unique values (cannot have duplicates)
    const duplicate: string[] = [];// Array to store duplicate values

    for(const text of optionText){
        if(myset.has(text)){
            duplicate.push(text);
        }
        else{
            myset.add(text);
        }
    }

    console.log("Duplicate values in the dropdown are: ", duplicate);
    console.log("unique array", myset);

    if(duplicate.length >0){
        console.log("Dropdown has duplicate with values", duplicate);
    }
    else{
        console.log("Dropdown has no duplicate values");
    }


 await page.waitForTimeout(5000);







});
