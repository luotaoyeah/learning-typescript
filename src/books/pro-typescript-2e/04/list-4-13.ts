/**
 * Listing 4-13. Wheel cleaning
 */

console.log("----------");

interface WheelCleaning {
  cleanWheel(): void;
}

class BasicWheelCleaning implements WheelCleaning {
  cleanWheel(): void {
    console.log("clean wheel 01");
    console.log("clean wheel 02");
  }
}

class ExecutiveWheelCleaning extends BasicWheelCleaning {
  cleanWheel() {
    super.cleanWheel();
    console.log("clean wheel 03");
    console.log("clean wheel 04");
  }
}

console.log("----------");
export { WheelCleaning, BasicWheelCleaning, ExecutiveWheelCleaning };
