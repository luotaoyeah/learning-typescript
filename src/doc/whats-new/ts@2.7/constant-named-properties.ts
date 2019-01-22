/**
 * Const-named properties
 */

console.log("----------");

export const SERIALIZE = Symbol("serialize-method-key");

export interface Serializer {
  [SERIALIZE](name: string): void;
}

class PersonSerializer implements Serializer {
  [SERIALIZE](name: string): void {
    console.log(SERIALIZE, name);
  }
}

new PersonSerializer()[SERIALIZE]("tom");

console.log("----------");
export {};
