import {test, expect, Locator} from '@playwright/test';

test("sorted dropdown test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const animals:Locator= page.locator('#animals>option');

    //const animals:Locator= page.locator('#colors>option');
    console.log(await animals.allTextContents());

    const trimmedanimal: string[] = (await animals.allTextContents()).map(text=>text.trim());
 console.log(trimmedanimal);

    const originalarray:string[]= [...trimmedanimal];
    const sortedarray:string[] = [...trimmedanimal].sort(); //sort is mutable and it changes the original array also being sorted (Problem with Sort) hence we use spread operator to create a copy of original array
 console.log("originalarray",originalarray);
 console.log("sortedarray)",sortedarray);


 expect(originalarray).toEqual(sortedarray);


 

 await page.waitForTimeout(5000);







});
