/**
 * Listing 5-7. Variable hoisting
 */

console.log("----------");

function test() {
  /*
    /!* TS2454: Variable 'name' is used before being assigned. *!/
    console.log('name', name);
  */

  const name = "tom";
}

test();

console.log("----------");
export {};
