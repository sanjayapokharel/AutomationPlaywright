import {test, expect, Locator} from '@playwright/test';

test("bstackdemo practice", async({page})=>{
//Navigate to WebPage
await page.goto("https://bstackdemo.com/");

//Interact with the dropdown
const orderBy:Locator = page.locator('.sort>select'); // Dropdown locator 
await expect(orderBy).toBeVisible();
await expect(orderBy).toBeEnabled();
await orderBy.selectOption('Lowest to highest');
await page.waitForTimeout(5000);
//Retrieve and Print Product Information

const allnames:Locator = page.locator('.shelf-item>p');
const allvalues:Locator = page.locator('.val');

const namelist = await allnames.allTextContents();
const valuelist = await allvalues.allTextContents();


console.log("Product Names: ", namelist);
console.log("Product Values: ", valuelist);

const n = namelist.length;
const v = valuelist.length;
expect(n).toBe(v);
if(n === v){
    console.log("Both arrays have same length", n);
}
else{
    console.log("Arrays have different lengths", n, v);
}

//const n = namelist.length
await page.waitForTimeout(5000);

for(let i = 0; i<n; i++){
    const merged = namelist[i] + ":" + valuelist[i];
    console.log(merged);
}

//Identify the lowest priced product
let lowestPrice = Number.MAX_VALUE;
let productName = '';   

for(let i = 0; i < v; i++){
    const priceString = valuelist[i].replace('$', '').trim();
    const price = parseFloat(priceString);  
    if(price < lowestPrice){
        lowestPrice = price;
        productName = namelist[i];
    }   

}


console.log(`Lowest priced product is "${productName}" with price $${lowestPrice}`);


}   
    );





