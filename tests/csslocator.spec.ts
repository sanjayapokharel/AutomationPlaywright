import {Locator, expect, test} from '@playwright/test';


test ("CSS locator practice", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    test.setTimeout(150000);

    //tag#id
    const searchbox:Locator=page.locator("input#small-searchterms");
    await expect(searchbox).toBeVisible();
    await searchbox.fill("T-shirts");
    await page.waitForTimeout(5000);

    //no tag and only ID
    const searchbox2:Locator=page.locator("#small-searchterms");
    await expect(searchbox2).toBeVisible();
    await searchbox2.fill("Apple & Banana");
    await page.waitForTimeout(5000);

    //tag.class
    const searchbox3:Locator=page.locator("input.search-box-text");
    await expect(searchbox3).toBeVisible();
    await searchbox3.fill("T-shirts");
    await page.waitForTimeout(5000);

    //no tag and only Class
    const searchbox4:Locator=page.locator(".search-box-text");
    await expect(searchbox4).toBeVisible();
    await searchbox4.fill("Apple & Banana");
    await page.waitForTimeout(5000);


    //tag[attribute='value']
    const searchbox5:Locator=page.locator("input[value='Search store']");
    await expect(searchbox5).toBeVisible();
    await searchbox5.fill("T-shirts");
    await page.waitForTimeout(5000);


    //[attribute='value'] only
    const searchbox6:Locator=page.locator("[value='Search store']");
    await expect(searchbox6).toBeVisible();
    await searchbox6.fill("T-shirts");
    await page.waitForTimeout(5000);


    //tag.class[attribute=value]
    const searchbox7:Locator=page.locator("input.search-box-text[value='Search store']");
    await expect(searchbox7).toBeVisible();
    await searchbox7.fill("T-shirts");
    await page.waitForTimeout(5000);



    //class[attribute=value] ONLY
    const searchbox8:Locator=page.locator(".search-box-text[value='Search store']");
    await expect(searchbox8).toBeVisible();
    await searchbox8.fill("T-shirts");
    await page.waitForTimeout(5000);

});