import { TestPage } from './page-singleton';

export abstract class BaseForm {
    protected readonly page = TestPage.getInstance();

    constructor(private readonly pageLocator: string) {  
    }

    private get locator() {
        return this.page.locator(this.pageLocator);
    }

    public async waitForLoad() {
        await this.locator.waitFor();
        return this;
    }
}