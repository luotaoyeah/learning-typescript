/**
 * Listing 1-86. Generic functions
 */

function reverseArray<T>(list: T[]): T[] {
  const resultArray: T[] = [];

  for (let i = list.length - 1; i >= 0; i--) {
    resultArray.push(list[i]);
  }

  return resultArray;
}

const numbers: number[] = [1, 2, 3, 4];
const strings: string[] = ["a", "b", "c", "d"];

console.log(reverseArray<number>(numbers)); // tslint:disable-line

/* type parameter can be omited */
console.log(reverseArray(strings)); // tslint:disable-line

export {};
