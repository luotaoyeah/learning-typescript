/**
 * Listing 6-43. worker02.ts
 */

declare function postMessage(message: any): void;

let id = 0;
self.setInterval(() => {
  id++;

  const message = {
    id,
    date: new Date().toISOString()
  };

  postMessage(message);
}, 1000);
