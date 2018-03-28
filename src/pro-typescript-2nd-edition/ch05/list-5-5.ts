/**
 * Listing 5-5. Block-level scope
 */

console.log("----------");

function test() {
  const scope = 1;

  {
    const scope = 2;

    /* inner 2 */
    console.log("inner", scope);
  }

  /* outer 1 */
  console.log("outer", scope);
}

test();

console.log("----------");
export {};
