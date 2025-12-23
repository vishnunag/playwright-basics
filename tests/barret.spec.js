const{test,expect} =require('@playwright/test')
test('articles should be displyed',async({page})=>{
  await page.goto("https://www.barrett-jackson.com/media/articles");
  

 
  test.setTimeout(30 * 60 * 1000); // 30 minutes (safe)

  for(let pagenum=1;pagenum <=2;pagenum++)
  {
      const listurl=`https://www.barrett-jackson.com/media/articles?page=${pagenum}`;
      console.log(`checking page${pagenum}`);

      await page.goto(listurl);

      const articlelink= page.locator('a[href*="/media/articles"]')
      const count =await articlelink.count();
      console.log(`articles on this page ${count}`);


      for(let i=0;i<count;i++)
      {
        await articlelink.nth(i).click();
        await expect(page.locator('h1')).toBeVisible();
        await page.goBack();
      }
  }
  
});
