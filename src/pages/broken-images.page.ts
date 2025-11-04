import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class BrokenImagesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openBrokenImagesPage(): Promise<void> {
    await this.open('/broken_images');
    await this.waitForVisible('h3');
  }

  async hasBrokenImages(): Promise<boolean> {
    return await this.page.evaluate(() => {
      const images = Array.from(document.getElementsByTagName('img'));
      for (const img of images) {
        if (img.naturalWidth === 0 || img.naturalHeight === 0) {
          return true;
        }
      }
      return false;
    });
  }

  async getBrokenImageUrlsByHTTP(): Promise<string[]> {
    const imageUrls = await this.page.locator('img').evaluateAll((imgs) =>
      imgs.map((img) => img.getAttribute('src'))
    );

    const absoluteUrls = imageUrls
      .filter((src): src is string => !!src)
      .map((src) =>
        src.startsWith('http') ? src : new URL(src, this.page.url()).toString()
      );

    const broken: string[] = [];

    for (const url of absoluteUrls) {
      const response = await this.page.request.get(url);
      if (response.status() !== 200) {
        broken.push(url);
      }
    }

    return broken;
  }
}