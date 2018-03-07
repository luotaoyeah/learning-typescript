/**
 * Listing 4-16. Abstract factory
 */
import { WheelCleaning } from "./list-4-13";
import { BodyCleaning } from "./list-4-14";

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

interface ValetFactory {
  getWheelCleaning(): WheelCleaning;

  getBodyCleaning(): BodyCleaning;
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export { ValetFactory };
