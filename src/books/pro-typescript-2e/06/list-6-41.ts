/**
 * Listing 6-41. Motion and orientation
 */
import { addEvent } from "./list-6-11";

console.log("----------");

addEvent(window, "devicemotion", (e: DeviceMotionEvent) => {
  debugger; // eslint-disable-line
});

console.log("----------");

export {};
