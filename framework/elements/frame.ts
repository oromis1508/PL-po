import { BaseElement } from "./base-element";

export class Frame extends BaseElement {
    constructor(frameLocator: string, elementLocator: string) {
        super(elementLocator);
        this.getElement = () => this.page.frameLocator(frameLocator).locator(elementLocator);
    }
}