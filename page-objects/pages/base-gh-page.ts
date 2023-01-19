import { BaseForm } from "../../framework/helpers/base-form";
import { Elements } from "../../framework/elements/manager/enum";
import { ElementsManager } from "../../framework/elements/manager/elements-manager";

export abstract class BaseGitPage extends BaseForm {
  public readonly searchField = ElementsManager.getElement(
    "[class*=header-search-input]",
    Elements.TextField
  );
  public readonly signInButton = ElementsManager.getElement(
    ".HeaderMenu-link--sign-in",
    Elements.Button
  );
  public readonly signUpButton = ElementsManager.getElement(
    ".HeaderMenu-link--sign-up",
    Elements.Button
  );

  constructor(pageLocator: string) {
    super(pageLocator);
  }
}
