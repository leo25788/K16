import { test } from "@playwright/test";


test('Add 100 todos and delete odd todos', async ({ page }) => {


    await page.goto('https://material.playwrightvn.com/');
    await page.click('//*[@id="section-xpath"]/table/tbody/tr[3]/td[2]/a');
    for (let i = 1; i <= 100; i++) {
        await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//*[@id="add-task"]').click();
    }


});

