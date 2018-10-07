/*
 * 索引外的元素，其类型为：其他元素类型的 union type；
 */
console.log("\n-------------------------------------------------- 01");

let tuple01: [string, number] = ["foo", 9];

/*
  // 直接赋值时，元素数量必须跟定义的数量一致；
  // TS2322: Type '[string, number, string]' is not assignable to type '[string, number]'
  tuple01 = ["bar", 19, "bar"];
*/

/*
 * 可以通过索引的方式，给 tuple 添加元素；
 */
/*
  tuple01[2] = "bar";
  tuple01[3] = 19;
*/
/* [ 'foo', 9, 'bar', 19 ] */
console.log(tuple01);
/* 4 */
console.log(tuple01.length);

/*
  // TS2322: Type 'true' is not assignable to type 'string | number'.
  tuple01[3] = true;
*/

export {};
