/**
 * Listing 1-4. Name reuse with let
 */

const firstName: string = "Foo";

{
  // eslint-disable-next-line no-shadow
  const firstName = "Bar";
  console.log("inner name: ", firstName); // inner name: Bar
}

console.log("outer name: ", firstName); // outer name: Foo

export {};
