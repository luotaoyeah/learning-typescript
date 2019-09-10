/* eslint-disable no-var,no-redeclare */
/**
 * Listing 1-5. Name reuse with var
 */

var firstName: string = "Foo";

{
  var firstName = "Bar";
  console.log("inner name: ", firstName); // inner name: Bar
}

console.log("outer name: ", firstName); // outer name: Bar

export {};
