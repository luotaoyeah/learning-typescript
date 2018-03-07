/**
 * Listing 1-78. Preserving context with a property and an arrow function
 */

class Counter {
  private _count: number = 0;

  count = () => {
    this._count++;
    console.log(this._count); // tslint:disable-line
  };
}

const counter = new Counter();

/* 1 */
counter.count();

const copyCount = counter.count;

/* 2 */
copyCount();

export {};
