/**
 * Listing 6-33. Geolocation getCurrentPosition
 */

console.log("----------");

navigator.geolocation.getCurrentPosition(
  (position: Position) => {
    console.log(position);
  },
  (error: PositionError) => {
    console.log(error);
  }
);

console.log("----------");
export {};
