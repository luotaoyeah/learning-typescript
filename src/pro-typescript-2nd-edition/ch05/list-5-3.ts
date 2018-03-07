/**
 * Listing 5-3. C-like scope
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function test() {
  var scope = 1;

  {
    var scope = 2;

    /* inner 2 */
    console.log("inner", scope); // tslint:disable-line
  }

  /* outer 2 */
  console.log("outer", scope); // tslint:disable-line
}

test();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
