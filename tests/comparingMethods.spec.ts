import {expect, Locator, test} from '@playwright/test';
import { removeAllListeners } from 'node:cluster';
import { text } from 'node:stream/consumers';



test("Auto suggest dropdown handling", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const products:Locator = page.locator(".product-title");

//innerText vs textContent (works for single elements)
console.log(await products.nth(1).innerText());
console.log(await products.nth(1).textContent());

//generate all the values of the product titles
await page.waitForTimeout(3000);

const length = await products.count();
console.log("Inner text valeus:");
for(let i=0; i<length;i++){


    const values = await products.nth(i).innerText(); // it will fetch only visible text and not any Null/spaces
    
    console.log(values);
}


console.log("Text content values:");
for(let i=0; i<length;i++){


    const textContent = await products.nth(i).textContent(); // it will fetch hidden text also including Null value and string (We need to perform trim here if required)
    
    //console.log(textContent);// generates all the values including spaces and nulls

    //Using Trim Function
    console.log(textContent?.trim());
}



//allInnerText vs allTextContents (works for Group of elements)
console.log("All Inner Texts:");
console.log(await products.allInnerTexts()); // it will fetch only visible text and not any Null/spaces in the form of Array String

console.log("All Text Contents:");
console.log(await products.allTextContents()); // it will fetch hidden text also including Null value and string in the form of Array String


const allTextContents = await products.allTextContents();
const trimmedTextContents:string[] = allTextContents.map(text=>text.trim());
console.log("Trimmed Text Contents:", trimmedTextContents);


//all(); converts Locator to Array of Locators

const productLocators:Locator[] = await products.all();
console.log(productLocators);

console.log(await productLocators[1].innerText());

//for-of loop
for(let prodloc of productLocators){
   console.log(prodloc.innerText());
}
//for-in loop
for(let i in productLocators){ //Index is captured here
    console.log(await productLocators[i].innerText());
}

});