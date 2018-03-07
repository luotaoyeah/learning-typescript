/**
 * Listing 4-21. Composing classes
 */
import { Acts, Dances, Sings } from "./list-4-20";
import { applyMixins } from "./list-4-19";

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class Actor implements Sings, Dances, Acts {
  public name: string;

  sing(): void {}

  dance(): void {}

  act(): void {}
}

applyMixins(Actor, [Sings, Dances, Acts]);

const actor = new Actor();

actor.sing();
actor.dance();
actor.act();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
