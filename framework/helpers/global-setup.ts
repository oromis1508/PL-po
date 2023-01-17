import { Label } from './../elements/label';
import { FullConfig } from '@playwright/test';

declare global {
    interface Array<T> {
        asyncMap<E>(callbackfn: (value: T, index: number, array: T[]) => Promise<E>): Promise<E[]>
    }
}

async function addGlobalMethods(config: FullConfig) {    
    Array.prototype.asyncMap = async function <E>(callbackfn: (this: any, value: any, index: number, array: any[]) => Promise<E>) {
        let result: E[] = [];
        for (let index = 0; index < this.length; index++) {
            result.push(await callbackfn(this[index], index, this));
        }
        return result;
    }
}

export default addGlobalMethods;

