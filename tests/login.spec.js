import { test, expect } from '@playwright/test';

test('Login validation failure', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpassword');

  await page.click('#submit');

  // Intentionally expecting success
  await expect(page.locator('h1'))
    .toHaveText('Logged In Successfully');

});