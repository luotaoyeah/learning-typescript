/**
 * Listing 5-5. Block-level scope
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

function test() {
  const scope = 1;

  {
    const scope = 2;

    /* inner 2 */
    console.log('inner', scope); // tslint:disable-line
  }

  /* outer 1 */
  console.log('outer', scope); // tslint:disable-line
}

test();

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};