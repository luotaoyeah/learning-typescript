/**
 * Listing 5-2. Queued timer, delayed, waiting for the test method to finish
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function test() {
  console.time("time:");

  setTimeout(() => {
    console.timeEnd("time:");
  }, 50);

  const start = +new Date();

  while (+new Date() - start < 100) {
    /*  */
  }
}

test();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
