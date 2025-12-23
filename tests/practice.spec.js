const {test,expect}=require('@playwright/test');
test('basic test',async({page})=>{
  await page.goto("https://www.barrett-jackson.com/");
  await expect(page).toHaveTitle(/Barrett-Jackson/);
});

test('select preview',async({page})=>{
  await page.getByText('Select Preview');
});
