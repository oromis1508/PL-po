import { Page } from 'playwright-core';

export class TestPage {
    private readonly pageInst: Page;

    private static testPageInstance: TestPage;

    private constructor(page: Page) {
        this.pageInst = page;
    }
    
    static getInstance(page?: Page) {
        if(this.testPageInstance) return this.testPageInstance.pageInst;
        else return (this.testPageInstance = new TestPage(page!)).pageInst;
    }
}