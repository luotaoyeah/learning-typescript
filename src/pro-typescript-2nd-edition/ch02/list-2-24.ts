/**
 * Listing 2-24. Logging Method Decorator
 */

function log(target: Function, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log('args:', JSON.stringify(args)); // tslint:disable-line
    return fn.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  static square(x: number): number {
    return x * x;
  }
}

Calculator.square(1);
Calculator.square(2);

export {};