/**
 * Listing 2-26. Class decorators
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

function log(target: any) {
  const originalConstructor = target;

  const newConstructor: any = (...args: any[]) => {
    console.log(`new instance: ${JSON.stringify(args)}`); // tslint:disable-line

    const ctor: any = () => {
      return originalConstructor.apply(null, args);
    };

    ctor.prototype = originalConstructor.prototype;

    return new ctor();
  };

  newConstructor.prototype = originalConstructor.prototype;

  return newConstructor;
}

@log
class Calculator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log('this.name:', this.name); // tslint:disable-line
  }
}

const calculator01 = new Calculator('tom');
const calculator02 = new Calculator('cat');

/* FIXME this.name is undefined */
calculator01.hello();
calculator02.hello();

console.log(calculator01.name); // tslint:disable-line
console.log(calculator02.name); // tslint:disable-line

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};