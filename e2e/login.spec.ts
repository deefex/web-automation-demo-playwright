import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { credentials } from '../src/testdata/credentials';

test.describe('Form Authentication', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  test('should refuse access with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.attemptLogin(credentials.invalid.username, credentials.invalid.password);
    await loginPage.assertInvalidLogin();
  });

  test('should allow access with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = await loginPage.loginSuccessfully(
      credentials.valid.username,
      credentials.valid.password
    );
    await securePage.assertSuccessfulLogin();
  });
});