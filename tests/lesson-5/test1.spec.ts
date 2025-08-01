import {test} from "@playwright/test";

test("Test 01",async({page}) =>{
    await  test.step("Open https://material.playwrightvn.com/",async() =>{
        await page.goto('https://material.playwrightvn.com/');
        await page.click('//*[@id="section-xpath"]/table/tbody/tr[1]/td[2]/a');

    });
    await test.step("Input thông tin",async() => {
        await page.locator('//*[@id="username"]').fill('Huy');
        await page.locator('//*[@id="email"]').pressSequentially('huy@maiil.com');
        await page.locator('//*[@id="male"]').check();
        await page.locator('//*[@id="reading"]').setChecked(true);
        await page.locator('//*[@id="interests"]').selectOption('technology');
        await page.locator('//*[@id="country"]').selectOption('australia');
        await page.locator('//*[@id="profile"]').setInputFiles('tests/lesson-5/testdata/huy.txt');
        await page.locator('//*[@id="registrationForm"]/div[16]/button').click();

               

    }
);

}
);