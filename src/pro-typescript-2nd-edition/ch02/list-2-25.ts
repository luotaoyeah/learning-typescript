/**
 * Listing 2-25. Configurable decorators
 */

function log(title: string) {
  return (target: Function, key: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`${title}.${key}'s args: ${JSON.stringify(args)}`); // tslint:disable-line
      return fn.apply(this, args);
    };

    return descriptor;
  };
}

class Calculator {
  @log('Calculator')
  static square(x: number): number {
    return x * x;
  }
}

Calculator.square(1);
Calculator.square(2);

export {};