/**
 * Listing 5-4. Functional scope
 */

console.log("----------");

function test() {
  const scope = 1;

  (function() {
    // eslint-disable-next-line no-shadow
    const scope = 2;

    /* inner 2 */
    console.log("inner", scope);
  })();

  /* outer 1 */
  console.log("outer", scope);
}

test();

console.log("----------");
export {};
