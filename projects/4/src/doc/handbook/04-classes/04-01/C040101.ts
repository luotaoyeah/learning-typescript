/*
 * Classes
 *     Classes
 */

console.log("\n-------------------------------------------------- 01");

class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet() {
    console.log(`hello ${this.greeting}`);
  }
}

const greeter = new Greeter("tom");
greeter.greet();

export {};
