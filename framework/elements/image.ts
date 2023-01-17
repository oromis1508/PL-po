import { BaseElement } from "./base-element";

export class ImageElement extends BaseElement {
    get src() {
        return this.getAttribute('src')
    }
}