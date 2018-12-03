/*
 * Hybrid Types
 */

/*
 * 在 JS 中，一个对象可能属于多种类型，
 * 比如一个 function，它也是一个 object，它也可以拥有属性；
 * interface 支持描述这样的混合类型；
 */
console.log("\n-------------------------------------------------- 01");

interface ICounter {
  (start: number): void;
  interval: number;
  reset(): void;
}

/**
 *
 */
function getCounter(): ICounter {
  const counter: ICounter = ((start: number) => {}) as ICounter;
  counter.interval = 9;
  counter.reset = () => {};

  return counter;
}

const counter: ICounter = getCounter();

counter(9);
counter.reset();
console.log(counter.interval);
console.log(typeof counter === "function");

export {};
