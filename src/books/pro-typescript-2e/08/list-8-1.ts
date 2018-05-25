/**
 * Listing 8-1. Using the throw keyword
 */

function errorsOnThree(num: number): number {
  if (num === 3) {
    throw new Error("Three is not allowed.");
  }
  return num;
}

console.log(errorsOnThree(1));
console.log(errorsOnThree(2));
console.log(errorsOnThree(3));
console.log(errorsOnThree(4));
