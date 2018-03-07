/**
 * Listing 4-18. Abstract factory pattern in use
 */
import { ValetFactory } from './list-4-16';

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class CarWashProgram {
  private valetFactory: ValetFactory;

  constructor(valetFactory: ValetFactory) {
    this.valetFactory = valetFactory;
  }

  wash() {
    this.valetFactory.getWheelCleaning().cleanWheel();
    this.valetFactory.getBodyCleaning().cleanBody();
  }
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};