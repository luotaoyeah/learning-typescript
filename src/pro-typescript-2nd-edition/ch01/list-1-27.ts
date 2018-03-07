/**
 * Listing 1-27. Type Guard
 */

function typeGuardExample(stringOrNumber: string | number) {
  /*
    /!* TS2339: Property 'length' does not exist on type 'string | number'.  *!/
    const a = stringOrNumber.length;
    /!* TS2339: Property 'toFixed' does not exist on type 'string | number'.  *!/
    const b = stringOrNumber.toFixed();
  */

  if (typeof stringOrNumber === "string") {
    console.log(stringOrNumber.length); // tslint:disable-line
  } else {
    console.log(stringOrNumber.toFixed(2)); // tslint:disable-line
  }
}

export {};
