import { test } from '../src/fixtures/auth.fixtures';
import { credentials } from '../src/testdata/credentials';

test.describe('Form Authentication', () => {
  test('should refuse access with invalid credentials', async ({ loginPage }) => {
    await loginPage.attemptLogin(credentials.invalid.username, credentials.invalid.password);
    await loginPage.assertInvalidLogin();
  });

  test('should allow access with valid credentials', async ({ authenticatedPage }) => {
    await authenticatedPage.assertSuccessfulLogin();
  });
});
