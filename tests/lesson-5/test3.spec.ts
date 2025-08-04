import { test } from "@playwright/test";


test('Add record', async ({ page }) =>
     {
    let test = [];
    let xpathtest = [];
    let xoa = '//*[@id="1-delete"]';



    await page.goto('https://material.playwrightvn.com/');
    await page.click('//*[@id="section-xpath"]/table/tbody/tr[3]/td[2]/a');


    for (let i = 1; i <= 10; i++) {
        await page.locator('//*[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//*[@id="add-task"]').click();
         if ((i) % 2 !== 0) {
        xpathtest.push(`//*[@id="todo-${i}-delete"]`);
        console.log(xpathtest);
        xpathtest.reverse();
        console.log(xpathtest);

  }
  // xoá 
  for (const xpath of xpathtest) {
  // Chấp nhận dialog nếu hiện
  page.on('dialog', dialog => dialog.accept());

 

  // Click button theo XPath
  await page.locator(xpath).click();
}



        


        }
    }
   

);

