/*
 * Indexable Types
 */

/*
 * interface 可以用来描述可索引的类型，
 * 可索引的类型一般是指对象和数组，如：obj["name"]，array[0]；
 */
console.log("\n-------------------------------------------------- 01");

interface IStringArray {
  /*
   * index signature 定义了索引的类型以及属性值的类型；
   */
  [index: number]: string;
}

const stringArray01: IStringArray = ["foo", "bar"];
const str01: string = stringArray01[0];

export {};
