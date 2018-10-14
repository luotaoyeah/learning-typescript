/**
 * Listing 3-8. Widened types
 */

console.log("----------");

// @ts-ignore: TS7010: 'f', which lacks return-type annotation, implicitly has an 'any' return type.
function f() {
  return null;
}

/* inferred type of x is any */
const x = f();

console.log("----------");
export {};
