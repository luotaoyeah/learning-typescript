/* eslint-disable no-var */
/**
 * Listing 5-3. C-like scope
 */

console.log("----------");

function test() {
  var scope = 1;

  {
    // eslint-disable-next-line no-redeclare
    var scope = 2;

    /* inner 2 */
    console.log("inner", scope);
  }

  /* outer 2 */
  console.log("outer", scope);
}

test();

console.log("----------");
export {};
