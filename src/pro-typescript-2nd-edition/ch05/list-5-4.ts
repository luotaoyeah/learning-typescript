/**
 * Listing 5-4. Functional scope
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

function test() {
  var scope = 1;

  (function () {
    var scope = 2;

    /* inner 2 */
    console.log('inner', scope); // tslint:disable-line
  })();

  /* outer 1 */
  console.log('outer', scope); // tslint:disable-line
}

test();

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};