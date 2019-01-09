/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-is-astring-assignable-to-anumber-for-interface-at--
 */

/**
 * Q:
 */
interface Something<T> {
  name: string;
}

let x: Something<number> = { name: "cat" };
let y: Something<string> = { name: "tom" };

x = y;

/**
 * A: In general, you should never have a type parameter which is unused.
 */

export {};
