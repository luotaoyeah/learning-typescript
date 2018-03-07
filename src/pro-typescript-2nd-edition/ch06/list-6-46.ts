/**
 * Listing 6-46. Signaling the worker to start
 */

const worker02: Worker = new Worker("./out/ch06/list-6-45.js");

worker02.addEventListener("message", (e: any) => {
  console.log(JSON.stringify(e.data, null, 2)); // tslint:disable-line
});

worker02.postMessage("waiting");
worker02.postMessage("start");
