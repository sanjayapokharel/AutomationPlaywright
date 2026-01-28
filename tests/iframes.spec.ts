import { Locator, test,expect, Frame } from "@playwright/test";

test("Frames Demo", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //Count total number of frames on the page
    const frames:Frame[] =page.frames();
    console.log("Total number of frames on the page is:",frames.length);

    //approach 1: using page.frame()

    const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

    if(frame1){ // checking if frame1 is not null(needed as page.frame() can return null if frame not found)
       await frame1.locator("input[name='mytext1']").fill("Welcome to Frame 1");// filling the text box inside frame1(Recommended)
       await frame1.fill("input[name='mytext1']","Welcome to Frame 1 - filled using frame.fill()");// another way of filling the text box
    }
    else{

        console.log("Frame1 not found");
    }

await page.waitForTimeout(5000);

//approach 2: using locator with framelocator

 const frameLocator = await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Welcome to Frame 1 - filled using frameLocator");
 await page.waitForTimeout(5000);

});    





test("inner/child Frames Demo", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
  
    //approach 1: using page.frame()

    const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

    if(frame3){
        await frame3.locator("[name='mytext3']").fill("Welcome to Frame 3");

        const childframe = frame3.childFrames();//returns array of child frames inside frame3
        console.log("Number of child frames inside frame3 is:",childframe.length);// 1 child frame inside frame3
        const radio = childframe[0].getByLabel("I am a human");
        await radio.check();// checking the checkbox inside child frame
        expect(radio).toBeChecked();
    }

    else{
        console.log("Frame3 not found");
    }

await page.waitForTimeout(5000);
});  