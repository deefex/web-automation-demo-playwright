import { test, expect } from '@playwright/test';
import { FileUploadPage } from '../src/pages/file-upload.page';

test.describe('File Upload', () => {
  let fileUploadPage: FileUploadPage;

  test.beforeEach(async ({ page }) => {
    fileUploadPage = new FileUploadPage(page);
    await fileUploadPage.openFileUploadPage();
  });

  test('I can successfully upload a file via the ChooseFile button', async () => {
    await fileUploadPage.uploadFile('spider-man.png');
    const uploadedName = await fileUploadPage.getUploadedFileName();
    expect(uploadedName).toBe('spider-man.png');
  });
});