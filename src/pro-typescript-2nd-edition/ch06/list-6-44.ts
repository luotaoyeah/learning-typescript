/**
 * Listing 6-44. Creating and using a web worker
 */

const worker: Worker = new Worker('./out/ch06/list-6-43.js');

worker.addEventListener('message', (e: any) => {
  console.log(JSON.stringify(e.data, null, 2)); // tslint:disable-line
});
