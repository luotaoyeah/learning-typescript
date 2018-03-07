/**
 * Listing 4-13. Wheel cleaning
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

interface WheelCleaning {
  cleanWheel(): void;
}

class BasicWheelCleaning implements WheelCleaning {
  cleanWheel(): void {
    console.log('clean wheel 01'); // tslint:disable-line
    console.log('clean wheel 02'); // tslint:disable-line
  }
}

class ExecutiveWheelCleaning extends BasicWheelCleaning {
  cleanWheel() {
    super.cleanWheel();
    console.log('clean wheel 03'); // tslint:disable-line
    console.log('clean wheel 04'); // tslint:disable-line
  }
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {
  WheelCleaning,
  BasicWheelCleaning,
  ExecutiveWheelCleaning
};