/**
 * Listing 6-38. Battery status
 */

console.log("----------");

const battery =
  navigator.battery || navigator.mozBattery || navigator.webkitBattery;
if (battery) {
  console.log("battery", battery);
}

console.log("----------");

export {};
