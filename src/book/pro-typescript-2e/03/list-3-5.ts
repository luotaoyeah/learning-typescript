/**
 * Listing 3-5. Bottom-up and top-down inference
 */

console.log("----------");

function add(x: number, y: number) {
  /* the return value is used to determine the return type */
  return x + y;
}

type CallsFunction = (cb: (result: string) => any) => void;

const callsFunction: CallsFunction = cb => {
  cb("tom");

  /*
    /!* TS2345: Argument of type '1' is not assignable to parameter of type 'string'. *!/
    cb(1);
  */
};

callsFunction(result => {
  console.log("result:", result);
});

console.log("----------");
export {};
