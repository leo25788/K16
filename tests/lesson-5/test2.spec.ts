import { test } from "@playwright/test";


test('has title', async ({ page }) => {


    await page.goto('https://material.playwrightvn.com/');
    await page.click('//*[@id="section-xpath"]/table/tbody/tr[2]/td[2]/a');
    await page.locator('//html/body/div[2]/div[1]/div[1]/div/button').dblclick();
    await page.locator('//html/body/div[2]/div[1]/div[2]/div/button').click();
    await page.locator('//html/body/div[2]/div[1]/div[2]/div/button').dblclick();
    await page.locator('//html/body/div[2]/div[1]/div[3]/div/button').click();



});

