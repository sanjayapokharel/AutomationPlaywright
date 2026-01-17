import {expect, test, Locator} from '@playwright/test';



//1. TextBox
test("Text Input Action", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name:Locator = page.locator("#name");
    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();
    const maxLength:string | null = await name.getAttribute("maxlength");
    expect(maxLength).toBe("15");

    await name.fill("John Canedy");
    const enteredValue = await name.inputValue();
    console.log("Name value returned is:", enteredValue);
    expect(enteredValue).toBe("John Canedy");

   await page.waitForTimeout(5000);

});

//Radio Buttons
test("Radio Button Actions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   const maleRadio:Locator=page.locator('#male');
   await expect(maleRadio).toBeVisible();
    
   const checkCondition =await (maleRadio).isChecked();
   expect(checkCondition).toBe(false);
   await maleRadio.check();// to select radio button
  const checkCondition1 =await (maleRadio).isChecked();
 expect(checkCondition1).toBe(true);
//This can dierctly be verified using toBeChecked Playwright assertion
    await expect(maleRadio).toBeChecked();


    await page.waitForTimeout(5000);



});

//CheckBox

// With only loop
//Select specific checkbox(Sunday) using getByLabel and assert
test("CheckBox Actions alternative way directly", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   

//Select all checkboxes(days of the week)
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let i=0;
for (const day of days){
const checkbox = page.getByLabel(day);
await checkbox.check();
await expect(checkbox).toBeChecked();

i = i+1;
}
console.log("total length of checkboxes selected is:" , i);


});




//Select specific checkbox(Sunday) using getByLabel and assert
test("CheckBox Actions", async ({page})=>{
    test.setTimeout(150000);
    await page.goto("https://testautomationpractice.blogspot.com/");
    const sundayLocator:Locator = page.getByLabel('Sunday');
  //  sundayLocator.check();
   // await expect(sundayLocator).toBeChecked();

    await page.waitForTimeout(5000);

//Select all checkboxes(days of the week)
const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const checkboxes:Locator[] = days.map(array=>page.getByLabel(array));
expect(checkboxes.length).toBe(7);   
//Select all checkboxes using check() method
for(const checkbox of checkboxes){
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}
//uncheck last 3 checkboxes
for (const last3day of days.slice(-3)){
    const checkbox = page.getByLabel(last3day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();

}
await page.waitForTimeout(5000);


//Toggle: Checkboxes: If selected, uncheck, if Unselected, check. Assert state flipped.


for (const checkbox of checkboxes){

    //if the checkbox are unchecked, check them

    if (await checkbox.isChecked()===true){

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
} else {

//if the checkbox is checked, uncheck them
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}

};
await page.waitForTimeout(5000);

// Randomly select checkboxes by index (1,3,6) and assert
    
// Firstly uncheck all checkboxes
for(const checkbox of checkboxes){
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}
const indexes:number[] = [1,3,6];


for (const i of indexes)
    
    {
        checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
        
}

await page.waitForTimeout(5000);

//Select the checkbox based on Label
const weekday:string = 'Friday';
//page.getByLabel(weekday).check();

for (const label of days)
    if(label.toLowerCase() === weekday.toLowerCase())
    {
        const checkbox = page.getByLabel(label);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

await page.waitForTimeout(5000);
});



