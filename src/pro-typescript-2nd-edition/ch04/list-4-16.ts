/**
 * Listing 4-16. Abstract factory
 */
import { WheelCleaning } from "./list-4-13";
import { BodyCleaning } from "./list-4-14";

console.log("----------");

interface ValetFactory {
  getWheelCleaning(): WheelCleaning;

  getBodyCleaning(): BodyCleaning;
}

console.log("----------");
export { ValetFactory };
