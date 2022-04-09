/**
 * Listing 6-34. Geolocation watchPosition
 */

console.log("----------");

const watch = navigator.geolocation.watchPosition(
  (position: any) => {
    console.log(position);
  },
  (error: any) => {
    console.log(error);
  }
);

console.log("----------");
export {};
