import {test,expect} from '@playwright/test'
test('login',async({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  console.log(page.url());
  //await page.getByRole('textbox',{name:'Username'}).fill('student');
  await page.fill('#username','student');
  await page.fill('#password','Password123');
  //await page.getByRole('textbox',{name:'Password'}).fill('Password123');
  await page.getByRole('button',{name:'Submit'}).click();
  console.log(page.url());
})