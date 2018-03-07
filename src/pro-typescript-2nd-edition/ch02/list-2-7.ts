/**
 * Listing 2-7. Modules
 */

export interface IPerson {
  name: string;
}

export class Person implements IPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export {};