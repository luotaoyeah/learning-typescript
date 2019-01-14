/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-type-inference-work-on-this-interface-interface-foot---
 */

/**
 * Q:
 */
interface Named<T> {
  name: string;
}

class MyNamed<T> implements Named<T> {
  name: "mine";
}

function findByName<T>(x: Named<T>): T {
  return undefined as any;
}

/*
  const x: MyNamed<string>;

  /!* expected y: string, got y: {} *!/
  const y = findByName(x);
*/

/**
 * A: In general, you should never have a type parameter which is unused.
 */

export {};
