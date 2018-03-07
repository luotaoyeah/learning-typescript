/**
 * Listing 4-15. CarWashProgram class before the abstract factory pattern
 */
import {
  BasicWheelCleaning,
  ExecutiveWheelCleaning,
  WheelCleaning
} from './list-4-13';
import {
  BasicBodyCleaning,
  BodyCleaning,
  ExecutiveBodyCleaning
} from './list-4-14';

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class CarWashProgram {
  private level: number;

  constructor(level: number) {
    this.level = level;
  }

  wash() {
    let wheelWash: WheelCleaning;
    let bodyWash: BodyCleaning;

    switch (this.level) {
      case 1:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheel();

        bodyWash = new BasicBodyCleaning();
        bodyWash.cleanBody();
        break;
      case 2:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheel();

        bodyWash = new ExecutiveBodyCleaning(); 
        bodyWash.cleanBody();
        break;
      case 3:
        wheelWash = new ExecutiveWheelCleaning();
        wheelWash.cleanWheel();

        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;
      default:
        break;
    }
  }
}

new CarWashProgram(3).wash();

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};