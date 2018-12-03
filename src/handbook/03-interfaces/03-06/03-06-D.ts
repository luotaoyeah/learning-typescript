/*
 * index signature 可以设置为 readonly 的；
 */
console.log("\n-------------------------------------------------- 01");

interface IReadonlyStringArray {
  readonly [index: number]: string;
}

let stringArray01: IReadonlyStringArray = ["foo"];
stringArray01 = ["bar"];

/*
  // TS2542: Index signature in type 'IReadonlyStringArray' only permits reading.
  stringArray01[0] = "baz";
*/

export {};
