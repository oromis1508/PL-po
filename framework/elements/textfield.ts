import { Key } from "../helpers/key";
import { BaseElement } from "./base-element";

export class TextField extends BaseElement {
    public async type(...values: (string | Key)[]) {
        const element = await this.waitForVisible();
        for (const value of values) {
            if(value in Key) await element.press(value);
            else await element.type(value);
        }
    }
}