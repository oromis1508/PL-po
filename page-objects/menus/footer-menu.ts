import { Link } from '../../framework/elements/link';
import { Elements } from '../../framework/elements/manager/enum';
import { ElementsManager } from './../../framework/elements/manager/elements-manager';
import { FooterCategory, FooterCompanyItem, FooterPlatformItem, FooterProductItem, FooterSupportItem } from './footer-menu-items';

export class FooterMenu {
    public getMenuItem(category: FooterCategory.Company, menu: FooterCompanyItem): Link;
    public getMenuItem(category: FooterCategory.Platform, menu: FooterPlatformItem): Link;
    public getMenuItem(category: FooterCategory.Product, menu: FooterProductItem): Link;
    public getMenuItem(category: FooterCategory.Support, menu: FooterSupportItem): Link;
    public getMenuItem(category: FooterCategory, menu: string) {
        return ElementsManager.getElement(`//footer//*[contains(@class, 'col-lg') and ./h2[normalize-space()='${category}']]//a[normalize-space()='${menu}']`, Elements.Link);
    }
}