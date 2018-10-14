/**
 * Listing 1-3. Block scope
 */

let globalScope = 1;

{
  /* OK. This is from a wider scope */
  globalScope = 100;

  let blockScope = 2;

  /*
    /!* Error! This is outside of the scope the variable is declared in *!/
    nestedBlockScope = 300;
  */

  {
    globalScope = 101;

    blockScope = 200;

    let nestedBlockScope = 3;
  }
}
