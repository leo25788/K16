import { test } from "@playwright/test";


test('Add record', async ({ page }) => {
    let test = [];
    let xpathtest;
    let xoa = '//*[@id="1-delete"]';



    await page.goto('https://material.playwrightvn.com/');
    await page.click('//*[@id="section-xpath"]/table/tbody/tr[3]/td[2]/a');
    

    for (let i = 1; i <= 10; i++) {
        await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//*[@id="add-task"]').click();

          if ((i) % 2 !== 0) {


        xpathtest = '//*[@id="todo-' + i + '-delete"]';
        //console.log(xpathtest);
        page.on('dialog', dialog => dialog.accept());
        await page.locator(xpathtest).click();


    } 
    }
   


});

