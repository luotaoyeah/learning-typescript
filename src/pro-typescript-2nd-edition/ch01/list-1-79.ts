/**
 * Listing 1-79. Preserving context with a closure
 */

class Counter {
  private _count: number = 0;

  count(id: string) {
    this._count++;
    console.log(this._count); // tslint:disable-line
  };
}

const counter = new Counter();

/* 1 */
counter.count('1');

const copyCount = (id: string) => {
  counter.count(id);
};

/* 2 */
copyCount('2');

export {};