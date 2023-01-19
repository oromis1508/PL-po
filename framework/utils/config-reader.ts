import { readFileSync } from "fs";

export type ConfigType = {
    [key: string]: boolean | string | number | ConfigType | (boolean | string | number)[];
}

export class ConfigReader {
    private configData: ConfigType;
    constructor(configName = 'default') {
        this.configData = JSON.parse(readFileSync('./configs/' + configName + '.json').toLocaleString());
    }

    public getProperty(name: string) {
        if(!name) return this.configData;
        const split = name.split('.');
        let index = 0;
        let result: any;
        do {
            result = this.configData[split[index]];
            index++;
        } while(index < split.length);

        return result;
    }
}