/**
 * Listing 1-77. Lost context
 */

class Counter {
  private _count: number = 0;

  count() {
    this._count++;
    console.log(this._count); // tslint:disable-line
  }
}

const counter = new Counter();

/* 1 */
counter.count();

const copyCount = counter.count;

/* NaN */
copyCount();

export {};
