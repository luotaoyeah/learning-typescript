/**
 * Why are function parameters bivariant?
 */

class Animal {
  name: string;
}

class Dog extends Animal {
  shout(): void {
    console.log('wangwang'); // tslint:disable-line
  }
}

function test(animals: Animal[]): void {
  console.log(animals); // tslint:disable-line
}

test([new Dog(), new Dog()]);

export {};
