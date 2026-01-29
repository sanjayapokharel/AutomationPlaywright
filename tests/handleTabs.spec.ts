import {test, expect, chromium} from '@playwright/test';



test("handle tabs", async()=>{
    const browser = await chromium.launch();// create browser
    const context = await browser.newContext(); //create context
    
    //creating 1 pages
    const parentPage = await context.newPage();
   

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

     //context.waitForEvent('page'); //event should be written above action
   // parentPage.getByText("New Tab").click(); //opens new tab
    //the above 2 statements should run parallel to capture the event hence Promise.all() is used as below:
    const [childPage] = await Promise.all([context.waitForEvent('page'), parentPage.getByText("New Tab").click()]);
   
    //switching between pages:
    
    
    //Approach 1 sing context (Preferred when more tabs)
    const pages = context.pages(); //returns an array
    console.log("No. of pages",pages.length);

    console.log("Title of Parent page",await pages[0].title());
    console.log("Title of Child page",await pages[1].title());



    // Approach 2: Alternate way (Preferred when only 2 tabs)
     console.log("Title of Parent page",await parentPage.title());
    console.log("Title of Child page",await childPage.title());

});