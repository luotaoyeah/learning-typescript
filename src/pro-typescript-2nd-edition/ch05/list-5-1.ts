/**
 * Listing 5-1. Queued timer
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function test() {
  console.time("time:");

  setTimeout(() => {
    console.timeEnd("time:");
  }, 50);
}

test();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
