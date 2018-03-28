/**
 * Why are function parameters bivariant?
 */

class Animal {
  name: string;
}

class Dog extends Animal {
  shout(): void {
    console.log("wangwang");
  }
}

function test(animals: Animal[]): void {
  console.log(animals);
}

test([new Dog(), new Dog()]);

export {};
