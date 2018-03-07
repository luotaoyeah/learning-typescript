/**
 * Listing 1-4. Name reuse with let
 */

let firstName: string = 'Foo';

{
  let firstName = 'Bar';
  console.log('inner name: ', firstName); // inner name: Bar
}

console.log('outer name: ', firstName); // outer name: Foo

export {};