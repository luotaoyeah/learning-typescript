/**
 * Listing 3-10. Extending the DeviceMotionEvent
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

interface DeviceMotionEvent {
  motionDescription: string;
}

function f(e: DeviceMotionEvent) {
  console.log(e.acceleration); // tslint:disable-line
  console.log(e.motionDescription); // tslint:disable-line
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
