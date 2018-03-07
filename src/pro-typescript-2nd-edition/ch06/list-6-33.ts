/**
 * Listing 6-33. Geolocation getCurrentPosition
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

navigator.geolocation.getCurrentPosition(
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
