/**
 * Listing 2-17. Dynamic module loading System modules
 */

declare const System: { import(module: string): Promise<any> };

import { Person } from './list-2-7';

const condition: boolean = true;
if (condition) {
  System.import('./list-2-7').then((MyPerson: typeof Person) => {
    console.log(MyPerson); // tslint:disable-line
  });
}
