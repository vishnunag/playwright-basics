import {test,expect} from '@playwright/test'
test('dropdown',async({page})=>{
  await page.goto('https://www.automationtesting.co.uk/dropdown.html');
  await page.selectOption('#cars','ford');
})
test('checkbox-radiobutton',async({page})=>{
  await page.goto('https://www.automationtesting.co.uk/dropdown.html');
  //await page.getByLabel('red').check();
  await page.getByRole('checkbox',{name:'red'}).check();
  // await page.getByRole('radio',{name:'Three'}).check();
  await page.getByRole('radio').allTextContents();
})
test('alertpopup',async({page})=>{
  await page.goto('http://practice-automation.com/popups/');
  await page.getByRole('button',{name:'Alert Popup'}).click();
  await page.waitForTimeout(2000);


})
test('tab control',async({page,context})=>{
  await page.goto('https://qaplayground.com/practice/tabs-windows?utm_source=chatgpt.com');
  const tab=await page.getByRole('button',{name:'Open Home Page'});
  const[newPage]=await Promise.all([
    context.waitForEvent('page'),
    tab.click()
  ])
  await newPage.bringToFront();
});


test('uploadfile',async({page})=>{
  await page.goto('https://practice-automation.com/file-upload/');
  const input=page.locator('#file-upload');
  await input.setInputFiles('resume_qa.pdf');
})

test ('screenshot',async({page})=>{
  await page.goto('https://practice-automation.com/file-upload/');
  await page.screenshot({path:'screenshot/home1.png',fullPage:true})
})

test('iframe',async({page})=>{
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.frameLocator('#singleframe').locator('input').fill('vishnu');  
})