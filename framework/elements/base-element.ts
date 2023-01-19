import { logger } from "./../helpers/logger";
import { Locator } from "playwright-core";
import { TestPage } from "../helpers/page-singleton";

export abstract class BaseElement {
  protected readonly page = TestPage.getInstance();

  public constructor(private readonly locator: string) {}

  public get visible() {
    return this.getElement().isVisible();
  }

  public get text() {
    logger.debug("get text");
    return this.waitForExists().then(() => this.getElement().textContent());
  }

  protected getElement(): Locator {
    logger.trace("get element");
    return this.page.locator(this.locator);
  }

  protected waitForExists() {
    return this.getElement().waitFor({ state: "attached" });
  }

  protected async waitForVisible() {
    await this.waitForExists();
    await this.getElement().waitFor({ state: "visible" });

    return this.getElement();
  }

  public async click() {
    const el = await this.waitForVisible();
    await el.click();
  }

  public async hover() {
    const el = await this.waitForVisible();
    await el.hover();
  }

  public async rightClick() {
    const el = await this.waitForVisible();

    await el.click({ button: "right" });
  }

  public async getAttribute(attr: string) {
    await this.waitForExists();
    return await this.getElement().getAttribute(attr);
  }

  public async getCSS(attr: string) {
    await this.waitForExists();
    return await this.getElement().evaluate(
      (el: any, obj) => {
        return el.computedStyleMap().get(obj.attr).toString();
      },
      { attr }
    );
  }
}
