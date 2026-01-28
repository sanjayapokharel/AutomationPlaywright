import { Locator, test,expect } from "@playwright/test";

test("Simple Dialog Handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //Enabling dialog event listener (Alert handling) / should be before triggering the dialog 
    page.on('dialog',(dialog)=>{
        dialog.accept();// to accept the alert dialog
        console.log("Dialog type is:",dialog.type());
        expect(dialog.type()).toContain("alert");
        console.log("Dialog Message is:",dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");

    })


    await page.locator("#alertBtn").click();//loads dialog

    await page.waitForTimeout(10000);
    


});

test("Confirmation Dialog Handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //Enabling dialog event listener (Alert handling) / should be before triggering the dialog 
    page.on('dialog',(dialog)=>{
       // to cancel the confirmation dialog
        console.log("Dialog type is:",dialog.type());
        expect(dialog.type()).toContain("confirm");
        console.log("Dialog Message is:",dialog.message());
        expect(dialog.message()).toContain("Press a button!");
        //dialog.dismiss(); 
        dialog.accept(); 
    })


    await page.locator("#confirmBtn").click();//loads dialog
    const message = await page.locator("#demo").innerText();
    console.log("Confirmation message after dialog action is:",message);
    expect(message).toContain("You pressed OK!");     //toHaveText not working here as it works only on Locator type but here it is a string

    await page.waitForTimeout(10000);
    


});


test("Prompt Dialog Handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //Enabling dialog event listener (Alert handling) / should be before triggering the dialog 
    page.on('dialog',(dialog)=>{
       // to cancel the confirmation dialog
        console.log("Dialog type is:",dialog.type());
        expect(dialog.type()).toContain("prompt");
        console.log("Dialog Message is:",dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept("Tony Stark");//accepting with input value (only can be accepted with filling input value)
        //dialog.dismiss(); 
        //dialog.accept(); 
    })


    await page.locator("#promptBtn").click();//loads dialog


    const message = await page.locator("#demo").innerText();
    console.log("Confirmation message after dialog action is:",message);
    await expect(page.locator("#demo")).toHaveText("Hello Tony Stark! How are you today?");     //toHaveText not working here as it works only on Locator type but here it is a string

    await page.waitForTimeout(10000);
    


});