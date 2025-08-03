import { test } from "@playwright/test";


test('Add 100 todos and delete odd todos', async ({ page }) => {
    let test = [];
    let xpathtest;
    let xoa = '//*[@id="1-delete"]';



    await page.goto('https://material.playwrightvn.com/');
    await page.click('//*[@id="section-xpath"]/table/tbody/tr[3]/td[2]/a');
    

    for (let i = 1; i <= 10; i++) {
        await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//*[@id="add-task"]').click();

         /* if ((i) % 2 !== 0) {


        xpathtest = '//*[@id="' + i + '-delete"]';
        console.log(xpathtest);
        await page.locator(xpathtest).click();


    } */
    }
    await page.locator('//*[@id="1-delete"]').click();


});

