/**
 * Listing 8-3. Using inheritance to create special exception types
 */
import { ApplicationError } from "./list-8-2";

class InputError extends ApplicationError {
  public name: string = "InputError";
}

function test(n: number): number {
  if (n === 3) {
    throw new InputError("invalid number 3");
  }
  return n;
}

console.log(test(1));
console.log(test(2));
console.log(test(3));
console.log(test(4));

export {};
