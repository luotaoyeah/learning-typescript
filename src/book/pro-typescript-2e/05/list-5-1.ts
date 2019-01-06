/**
 * Listing 5-1. Queued timer
 */

console.log("----------");

function test() {
  console.time("time:");

  setTimeout(() => {
    console.timeEnd("time:");
  }, 50);
}

test();

console.log("----------");
export {};
