import { test, expect } from '@playwright/test';
import { DynamicContentPage } from '../src/pages/dynamic-content.page';

test.describe('Dynamic Content', () => {
  let dynamicContentPage: DynamicContentPage;

  const ROW1_TXT =
    'Accusantium eius ut architecto neque vel voluptatem vel nam eos minus ullam dolores voluptates enim sed voluptatem rerum qui sapiente nesciunt aspernatur et accusamus laboriosam culpa tenetur hic aut placeat error autem qui sunt.';
  const ROW2_TXT =
    'Omnis fugiat porro vero quas tempora quis eveniet ab officia cupiditate culpa repellat debitis itaque possimus odit dolorum et iste quibusdam quis dicta autem sint vel quo vel consequuntur dolorem nihil neque sunt aperiam blanditiis.';

  // optional static image checks
  const ROW1_IMG = '/img/avatars/Original-Facebook-Geek-Profile-Avatar-2.jpg';
  const ROW2_IMG = '/img/avatars/Original-Facebook-Geek-Profile-Avatar-7.jpg';

  test.beforeEach(async ({ page }) => {
    dynamicContentPage = new DynamicContentPage(page);
    await dynamicContentPage.openDynamicContentPage();
  });

  test('the paragraph in the 1st row matches the static page content', async () => {
    const row1Text = await dynamicContentPage.getRowText(1);
    expect(row1Text).toBe(ROW1_TXT);
  });

  test('the paragraph in the 2nd row matches the static page content', async () => {
    const row2Text = await dynamicContentPage.getRowText(2);
    expect(row2Text).toBe(ROW2_TXT);
  });

  // Optional (can be flaky if herokuapp content changes)
  test.skip('the image in the 1st row is as per the static page settings', async () => {
    const src = await dynamicContentPage.getRowImageSrc(1);
    expect(src).toContain(ROW1_IMG);
  });

  test.skip('the image in the 2nd row is as per the static page settings', async () => {
    const src = await dynamicContentPage.getRowImageSrc(2);
    expect(src).toContain(ROW2_IMG);
  });
});