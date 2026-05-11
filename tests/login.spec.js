const { test, expect } = require('@playwright/test');

test('Login functionality test', async ({ page }) => {

  // Open website
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Enter username
  await page.fill('#username', 'student');

  // Enter password
  await page.fill('#password', 'Password123');

  // Click login button
  await page.click('#submit');

  // Verify successful login
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  // Verify URL
  await expect(page).toHaveURL(/logged-in-successfully/);

});