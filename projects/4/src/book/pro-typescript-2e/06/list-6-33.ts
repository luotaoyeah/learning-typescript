/**
 * Listing 6-33. Geolocation getCurrentPosition
 */

console.log("----------");

navigator.geolocation.getCurrentPosition(
  (position: any) => {
    console.log(position);
  },
  (error: any) => {
    console.log(error);
  }
);

console.log("----------");
export {};
