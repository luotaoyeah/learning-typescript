/**
 * Listing 3-10. Extending the DeviceMotionEvent
 */

console.log("----------");

interface DeviceMotionEvent {
  motionDescription: string;
}

function f(e: DeviceMotionEvent) {
  console.log(e.acceleration);
  console.log(e.motionDescription);
}

console.log("----------");
