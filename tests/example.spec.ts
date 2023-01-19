import { Asserts } from "./../framework/helpers/assert-helper";
import { PageFactory } from "./../page-objects/page-factory/factory";
import { expect } from "@playwright/test";
import { test } from "../page-objects/hooks/fixtures/go-go-url";
import { Page } from "../page-objects/page-factory/pages";
import { Key } from "../framework/helpers/key";

import {
  FooterCategory,
  FooterCompanyItem,
} from "../page-objects/menus/footer-menu-items";
import { logger } from "../framework/helpers/logger";

test("Main page check", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/GitHub/);

  const mainPage = await PageFactory.getPage(Page.Main);

  await Asserts.soft(() =>
    expect(mainPage.signInButton.getCSS("color")).resolves.toMatch(
      /0, ?255, ?255/
    )
  );

  await expect(mainPage.searchField.visible).resolves.toBeTruthy();
  await expect(mainPage.signInButton.visible).resolves.toBeTruthy();
  await expect(mainPage.signUpButton.visible).resolves.toBeTruthy();
  await expect(mainPage.dronImage.src).resolves.toMatch(/hero-drone/);
});

test.skip("Search page check", async ({ page }) => {
  const dataToSearch = "Auto";

  const mainPage = await PageFactory.getPage(Page.Main);

  await mainPage.searchField.type(dataToSearch, Key.Enter);

  await expect(page).toHaveTitle(/Search/);
  await expect(page).toHaveURL(/search/);

  const searchPage = await PageFactory.getPage(Page.Search);

  await expect(searchPage.searchField.visible).resolves.toBeTruthy();
  await expect(searchPage.signInButton.visible).resolves.toBeTruthy();
  await expect(searchPage.signUpButton.visible).resolves.toBeTruthy();
  await expect(searchPage.resultsInfoLabel.text).resolves.toMatch(/\d+,\d{3}/);
});

test.skip("Shop iframe check", async ({ page }) => {
  const mainPage = await PageFactory.getPage(Page.Main);

  logger.trace("1");
  logger.debug("2");
  logger.info("3");
  logger.warn("4");
  logger.error("5");
  logger.fatal("6");

  logger.info("click shop link");
  await mainPage.footerMenu
    .getMenuItem(FooterCategory.Company, FooterCompanyItem.Shop)
    .click();

  const shopPage = await PageFactory.getPage(Page.Shop);
  await expect(shopPage.iframeInvisibleText.visible).resolves.toBeFalsy();

  logger.info("hover captcha");
  await shopPage.iframeLogo.hover();

  logger.error("BUG ID-12345");
  await expect(shopPage.iframeInvisibleText.visible).resolves.toBeTruthy();
  logger.info("asdafdd");

  await expect(shopPage.cardItemsCountLabel.text).resolves.toBe("0");
});
