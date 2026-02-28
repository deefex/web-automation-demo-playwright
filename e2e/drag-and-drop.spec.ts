import { test } from '@playwright/test';
import { DragAndDropPage } from '../src/pages/drag-and-drop.page';
import { expectColumnHeaders } from '../src/helpers/assertions';

test.describe('Drag & Drop', () => {
  let dragAndDropPage: DragAndDropPage;

  test.beforeEach(async ({ page }) => {
    dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.openDragAndDropPage();
  });

  test('I can successfully drag the element from column A to column B', async () => {
    await dragAndDropPage.dragAtoB();
    const headers = await dragAndDropPage.getColumnHeaders();
    await expectColumnHeaders(headers, { a: 'B', b: 'A' });
  });

  test('I can successfully drag the element from column B to column A', async () => {
    await dragAndDropPage.dragBtoA();
    const headers = await dragAndDropPage.getColumnHeaders();
    await expectColumnHeaders(headers, { a: 'B', b: 'A' });
  });
});
