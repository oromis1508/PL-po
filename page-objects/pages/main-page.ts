import { FooterMenu } from './../menus/footer-menu';
import { ElementsManager } from "../../framework/elements/manager/elements-manager";
import { Elements } from "../../framework/elements/manager/enum";
import { BaseGitPage } from "./base-gh-page";

export class MainPage extends BaseGitPage {
    public readonly dronImage = ElementsManager.getElement('img.home-drone', Elements.Image);
    public readonly footerMenu = new FooterMenu();

    constructor() {
        super('.home-campaign-hero');
    }
}
