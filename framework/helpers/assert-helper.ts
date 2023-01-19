import { expect } from "@playwright/test";
export class Asserts {
  private static errorsPull: Error[] = [];

  static async soft(func: () => Promise<any>) {
    try {
      await func();
    } catch (error: any) {
      Asserts.errorsPull.push(error);
    }
  }

  static throwSoft() {
    expect(this.errorsPull).toHaveLength(0);
  }
}
