import { AuthSteps } from "./../../steps/auth-steps";
import { test as base } from "@playwright/test";
import { Asserts } from "../../../framework/helpers/assert-helper";
import { TestPage } from "../../../framework/helpers/page-singleton";
import { users } from "../../helpers/user";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto("https://github.com/");
    TestPage.getInstance(page);
    await use(page);
  },
});

export const AuthAsAdmin = base.extend({
  page: async ({ page }, use) => {
    await page.goto("https://github.com/");
    TestPage.getInstance(page);
    AuthSteps.auth(users.admin);
    await use(page);
  },
});

test.afterEach(() => {
  Asserts.throwSoft();
});
