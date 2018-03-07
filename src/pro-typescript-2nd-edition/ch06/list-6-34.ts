/**
 * Listing 6-34. Geolocation watchPosition
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

const watch = navigator.geolocation.watchPosition(
  (position: Position) => {
    console.log(position); // tslint:disable-line
  },
  (error: PositionError) => {
    console.log(error); // tslint:disable-line
  }
);

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
