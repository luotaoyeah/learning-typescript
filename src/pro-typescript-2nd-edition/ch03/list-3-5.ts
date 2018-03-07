/**
 * Listing 3-5. Bottom-up and top-down inference
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function add(x: number, y: number) {
  /* the return value is used to determine the return type */
  return x + y;
}

interface CallsFunction {
  (cb: (result: string) => any): void;
}

const callsFunction: CallsFunction = cb => {
  cb("tom");

  /*
    /!* TS2345: Argument of type '1' is not assignable to parameter of type 'string'. *!/
    cb(1);
  */
};

callsFunction(result => {
  console.log("result:", result); // tslint:disable-line
});

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
