/* eslint-disable @typescript-eslint/no-namespace,no-redeclare */
/**
 * Listing 2-6. Namespace/class merging
 */

class Car {
  log() {
    console.log("Car.log()");
  }
}

/* inner class */
namespace Car {
  export class Engine {
    log() {
      console.log("Car.Engine.log()");
    }
  }

  export class Wheel {}
}

const car = new Car();
/* 'Car.log()' */
car.log();

const engine = new Car.Engine();
/* 'Car.Engine.log()' */
engine.log();

export {};
