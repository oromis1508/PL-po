import { ElementsManager } from '../../framework/elements/manager/elements-manager';
import { Elements } from '../../framework/elements/manager/enum';
import { BaseGitPage } from './base-gh-page';

export class SearchPage extends BaseGitPage {
    public readonly resultsInfoLabel = ElementsManager.getElement("//*[contains(@class, 'row') and .//summary]//h3", Elements.Label);
    
    constructor() {
        super('[class*=search-results]');
    }
}