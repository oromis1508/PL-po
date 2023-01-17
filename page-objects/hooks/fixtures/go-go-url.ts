import { TestPage } from './../../framework/helpers/page-singleton';
import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://github.com/');
    TestPage.getInstance(page);
    await use(page);
  },
});
