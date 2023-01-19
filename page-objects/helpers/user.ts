import { ConfigReader } from "../../framework/utils/config-reader";

const userFileName = (process.env as any)[`npm_config_usersConfig`];
export const users = new ConfigReader(userFileName ?? "users").getProperty("");
