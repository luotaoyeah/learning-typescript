/**
 * Listing 8-5. Checking the type of error
 */
import { ApplicationError } from "./list-8-2";

class InputError extends ApplicationError {
  public name: string = "InputError";
}

class OtherError extends ApplicationError {}

function test(n: number): number {
  if (n === 2) {
    throw new OtherError("invalid number 2");
  }
  if (n === 3) {
    throw new InputError("invalid number 3");
  }
  return n;
}

console.log(test(1));
try {
  console.log(test(2));
  console.log(test(3));
} catch (e) {
  if (e instanceof ApplicationError) {
    console.log("ignore some error");
  } else {
    throw e;
  }
}
console.log(test(4));

export {};
