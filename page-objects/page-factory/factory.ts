import { ShopPage } from './../pages/shop-page';
import { MainPage } from "../pages/main-page";
import { SearchPage } from "../pages/search-page";
import { Page as PageType } from "./pages";

export class PageFactory {
    public static getPage(pageType: PageType.Main): Promise<MainPage>;
    public static getPage(pageType: PageType.Search): Promise<SearchPage>;
    public static getPage(pageType: PageType.Shop): Promise<ShopPage>;
    public static getPage(pageType: PageType) {
        switch(pageType) {
            case PageType.Main:
                return new MainPage().waitForLoad();
            case PageType.Search:
                return new SearchPage().waitForLoad();
            case PageType.Shop:
                return new ShopPage().waitForLoad();
            default:
                throw new Error(`Not implemented ${this.getPage.name} for ${pageType}`);
        }
    }
}