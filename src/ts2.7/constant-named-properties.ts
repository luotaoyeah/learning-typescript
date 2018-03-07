/**
 * Const-named properties
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

export const SERIALIZE = Symbol('serialize-method-key');

export interface Serializer {
  [SERIALIZE](name: string): void;
}

class PersonSerializer implements Serializer {
  [SERIALIZE](name: string): void {
    console.log(SERIALIZE, name); // tslint:disable-line
  }
}

new PersonSerializer()[SERIALIZE]('tom');

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};