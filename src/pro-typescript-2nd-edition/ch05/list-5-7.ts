/**
 * Listing 5-7. Variable hoisting
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function test() {
  /*
    /!* TS2454: Variable 'name' is used before being assigned. *!/
    console.log('name', name); // tslint:disable-line
  */

  var name = "tom";
}

test();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
