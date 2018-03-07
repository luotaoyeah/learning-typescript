/**
 * Listing 6-45. Worker that waits for a start signal
 */

declare function postMessage(message: any): void;

let id02 = 0;

function start() {
  self.setInterval(() => {
    id02++;

    const message = {
      id: id02,
      date: new Date().toISOString()
    };

    postMessage(message);
  }, 1000);
}

self.onmessage = (e: any) => {
  debugger; // eslint-disable-line
  if (e.data === 'start') {
    start();
  } else {
    console.log(e.data); // tslint:disable-line
  }
};
