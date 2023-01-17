import { ElementsManager } from './../../framework/elements/manager/elements-manager';
import { BaseForm } from "../../framework/helpers/base-form";
import { Elements } from '../../framework/elements/manager/enum';

export class ShopPage extends BaseForm {
    private readonly frameSelector = '[title="reCAPTCHA"]';
    public readonly cardItemsCountLabel = ElementsManager.getElement('.nav__cart__item-count', Elements.Label);
    public readonly iframeLogo = ElementsManager.getElement('.rc-anchor-logo-img', Elements.Frame, this.frameSelector);
    public readonly iframeInvisibleText = ElementsManager.getElement('.rc-anchor-invisible-text', Elements.Frame, this.frameSelector);
    
    constructor() {
        super('[title="The Github Shop Home Page"]');
    }
}