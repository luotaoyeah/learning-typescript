/**
 * Listing 1-86. Generic functions
 */

function reverseArray<T>(list: Array<T>): Array<T> {
  const resultArray: Array<T> = [];

  for (let i = list.length - 1; i >= 0; i--) {
    resultArray.push(list[i]);
  }

  return resultArray;
}

const numbers: Array<number> = [1, 2, 3, 4];
const strings: Array<string> = ["a", "b", "c", "d"];

console.log(reverseArray<number>(numbers));

/* type parameter can be omited */
console.log(reverseArray(strings));

export {};
