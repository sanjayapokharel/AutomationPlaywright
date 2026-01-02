import {test, expect,Locator} from '@playwright/test';



test('Xpath demo in playwright', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    
    //absolute Xpath
   const absolutelogo:Locator=page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absolutelogo).toBeVisible();


    //relative Xpath
    const relativelogo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();

    //Count number of locators

    const product:Locator = page.locator("//h2//a[contains(@href,'computer')]");
    const productCount:number = await product.count();
    console.log("Number of product count is :", productCount);
    expect(productCount).toBeGreaterThan(0);

    //console.log(await product.textContent());     //Error: strict mode violation:

    console.log("First Computer related Product:", await product.first().textContent());
    console.log("last Computer related Product:", await product.last().textContent());
    console.log("Second computer related product:", await product.nth(1).textContent());

    let productTitles:string[] = await product.allTextContents(); // getting all the matched product  into arrays
    console.log("All Compouter related products:", productTitles); //Prints the value as an array

    for (let pt of productTitles)
    {
        console.log(pt);
    };

// Start-with()
const buldingProducs:Locator= page.locator("//h2//a[starts-with(@href,'/build')]");
const count:number = await buldingProducs.count();
expect (count).toBeGreaterThan(0);

//text()

const reglink:Locator = page.locator("//a[text() = 'Register']");
await expect(reglink).toBeVisible();
console.log("Reglink etx is :", await reglink.textContent());

//last()
const lastitem:Locator= page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastitem).toBeVisible();
console.log("Last item is :", await lastitem.textContent());

//position()
const positionitem:Locator= page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionitem).toBeVisible();
console.log("Position item is :", await positionitem.textContent());


});