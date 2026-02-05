import { Locator,test,expect } from "@playwright/test";


test("Static Table Handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator = page.locator("table[name = 'BookTable'] tbody");
    await expect(table).toBeVisible();

    //count number of rows in a table
    const rows:Locator = page.locator("table[name = 'BookTable'] tbody tr");

    await expect(rows).toHaveCount(7);  //approach 1 for row count validation
    console.log("Number of rows in the table:",await rows.count());
    expect(await rows.count()).toBe(7); //approach 2 for row count validation


    //chaining of Locators to fetch columns
    const tableheader:Locator = rows.locator("th");
    console.log("Columns in the table:",await tableheader.allInnerTexts());
    const tcount = await tableheader.count();
    console.log("Columns count in the table:",tcount);
    expect(tcount).toBe(4);

    //Capture and Read all data from 2nd row of the table
    const secondRow:Locator = rows.nth(2).locator("td");
    const secondRowvalues = await secondRow.allInnerTexts();
    console.log("All the records are:",secondRowvalues);
    await expect(secondRow).toHaveText(["Learn Java", "Mukesh", "Java", "500"]);


    console.log("Printing all the records of 2nd rows of the table:");
    for (let i of secondRowvalues){

        console.log(i);
}

// Read and print all the data from the table

console.log("Printing all the records of the table:");

const allRows:Locator[] = await rows.all();
console.log(await rows.locator("th").allInnerTexts())
for (let rows of allRows.slice(1)) { //slicing to skip header row
    //console.log(await rows.locator("td").innerText());
    const final_value = await rows.locator("td").allInnerTexts();
    console.log(final_value.join("\t "));// tab space between values using Join
   // console.log(await rows.locator("td").textContent());
    //console.log(await rows.locator("td").allTextContents());
}

//Print books written by Mukesh.

console.log("Books written by Mukesh:");
const mukeshBooks:string[] = [];

for(let rows of allRows.slice(1)){// skip header so slice(1)
    const cells = await rows.locator("td").allInnerTexts();
    const author = cells[1];
    const bookname = cells[0];

    if(author ==="Mukesh"){
        console.log(`${author},${bookname}`);
        mukeshBooks.push(bookname);
    }
}
expect(mukeshBooks).toHaveLength(2);
//Print the prices of all the books

console.log("Prices of all the books:");

let totalPrice:number = 0;
for(let rows of allRows.slice(1)){// skip header so slice(1)
    const cells = await rows.locator("td").allInnerTexts();
    const price = cells[3];
   totalPrice= totalPrice + parseInt(price);
}

console.log("Total price of all the books:",totalPrice);
});