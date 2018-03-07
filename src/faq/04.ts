/**
 * You should emit classes like this so they have real private members
 */

class Foo {
  private x: number = 0;

  increment(): number {
    this.x++;
    console.log('x', this.x); // tslint:disable-line
    return this.x;
  }
}

const a = new Foo();
a.increment();
a.increment();
const b = new Foo();

a.increment();

export {};
