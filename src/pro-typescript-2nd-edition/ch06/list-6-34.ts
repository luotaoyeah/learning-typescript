/**
 * Listing 6-34. Geolocation watchPosition
 */

console.log("----------");

const watch = navigator.geolocation.watchPosition(
  (position: Position) => {
    console.log(position);
  },
  (error: PositionError) => {
    console.log(error);
  }
);

console.log("----------");
export {};
