/**
 * Listing 6-41. Motion and orientation
 */
import { addEvent } from "./list-6-11";

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

addEvent(window, "devicemotion", (e: DeviceMotionEvent) => {
  debugger; // eslint-disable-line
});

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

export {};
