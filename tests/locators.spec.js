const{test,expect}=require('@playwright/test');

test('getByRole',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  await page.getByRole('button',{name:'Add Item'}).click();
});

test('getByText',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  //await expect(page.getByText('UI testing tools')).toBeVisible();
  //await expect(page.getByText(/UI testing tools/i)).toBeVisible();//using regex
  await expect(page.getByText('UI testing tools',{exact:true})).toBeVisible();

})

test('getByLabel',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  await expect(page.getByLabel('Choose a country')).toBeVisible();

})

test('getByPlaceholder',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  await expect(page.getByPlaceholder('Search the site')).toBeVisible();  

})

test('getByTestId',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  await page.getByTestId('user-name').click(); 

})

test('getByAltText',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  await expect(page.getByAltText('User avatar')).toBeVisible();  

})

test('getByTitle',async({page})=>{
  await page.goto('https://practice.expandtesting.com/locators');
  await page.getByTitle('Refresh content').click(); 

})

test('CSSselector',async({page})=>{ 
  await page.goto('https://practice.expandtesting.com/locators');
  await expect(page.locator('.btn.btn-outline-secondary.me-2')).toBeVisible();
  
})

test('Xpath',async({page})=>{ 
  await page.goto('https://practice.expandtesting.com/locators');
await expect(page.locator('//button[contains(text(),"Reload")]')).toBeVisible();
  
})