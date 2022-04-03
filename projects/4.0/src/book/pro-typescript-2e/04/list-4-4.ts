/**
 * Listing 4-4. Polymorphism
 */

console.log("----------");

interface Vehicle {
  moveTo(x: number, y: number): void;
}

/* explicitly implements interface */
class Car implements Vehicle {
  moveTo(x: number, y: number): void {
    console.log(x, y);
  }
}

class SportCar extends Car {}

class Airplane {
  moveTo(x: number, y: number): void {
    console.log(x, y);
  }
}

class Satellite {
  moveTo(x: number): void {
    console.log(x);
  }
}

function nagivate(vehicle: Vehicle) {
  vehicle.moveTo(1, 2);
}

nagivate(new SportCar());
nagivate(new Airplane());
nagivate(new Satellite());

console.log("----------");
export {};
