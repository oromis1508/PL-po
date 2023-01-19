import { FullConfig } from "@playwright/test";
import addGlobalMethods from "../../framework/helpers/global-setup";

async function globalSetup(config: FullConfig) {
  await addGlobalMethods(config);
}

export default globalSetup;
