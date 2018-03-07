/**
 * Listing 6-38. Battery status
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

const battery =
  navigator.battery || navigator.mozBattery || navigator.webkitBattery;
if (battery) {
  console.log("battery", battery); // tslint:disable-line
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

export {};
