import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';
import path from 'path';

export class FileUploadPage extends BasePage {
  readonly heading: Locator;
  readonly chooseInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h3');
    this.chooseInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async openFileUploadPage(): Promise<void> {
    await this.open('/upload');
    await this.heading.waitFor({ state: 'visible' });
  }

  async uploadFile(fileName: string = 'spider-man.png'): Promise<void> {
    const filePath = path.resolve(__dirname, '../images', fileName); // adjust relative path
    await this.chooseInput.setInputFiles(filePath);
    await this.uploadButton.click();
    await this.waitForMessage();
  }

  async waitForMessage(): Promise<void> {
    await this.uploadedFiles.waitFor({ state: 'visible' });
  }

  async getUploadedFileName(): Promise<string> {
    return (await this.uploadedFiles.textContent())?.trim() || '';
  }
}