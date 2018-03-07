/**
 * Listing 2-27. Property decorators
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

function log(target: any, key: string) {
  let value = target[key];

  const getter = function() {
    console.log("getter:", value); // tslint:disable-line
    return value;
  };

  const setter = function(newValue: any) {
    console.log("setter:", newValue); // tslint:disable-line
    value = newValue;
  };

  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true
    });
  }
}

class Calculator {
  @log name: string;

  hello() {
    console.log("Calculator.name:", this.name); // tslint:disable-line
  }
}

const calculator = new Calculator();

calculator.name = "tom";
calculator.hello();

calculator.name = "cat";
calculator.hello();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
