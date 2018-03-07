/**
 * Listing 1-80. Preserving context with bind
 */

class Counter {
  private _count: number = 0;

  count() {
    this._count++;
    console.log(this._count); // tslint:disable-line
  };
}

const counter = new Counter();

/* 1 */
counter.count();

const copyCount = counter.count.bind(counter);

/* 2 */
copyCount();

export {};