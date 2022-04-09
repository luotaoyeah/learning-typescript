/*
 * ReadonlyArray<T> 跟 Array<T> 类似，
 * 区别在于，移除了所有操作数组的方法，
 * 即初始化之后，数组元素不能再被改变；
 */
console.log("\n-------------------------------------------------- 01");

const array01: ReadonlyArray<number> = [1, 2, 3];

/* 不能通过索引设置元素的值 */
/*
  // TS2542: Index signature in type 'ReadonlyArray<number>' only permits reading.
  array01[0] = 0;
*/

/* 不能改变 length 属性 */
/*
  // TS2540: Cannot assign to 'length' because it is a constant or a read-only property.
  array01.length = 0;
*/

/*
  // TS2339: Property 'push' does not exist on type 'ReadonlyArray<number>'.
  array01.push(4);
*/

/* 不能赋值给 Array<T> 类型的数组 */
/*
  // TS2322: Type 'ReadonlyArray<number>' is not assignable to type 'number[]'.
  //   Property 'push' is missing in type 'ReadonlyArray<number>'.
  const array02: Array<number> = array01;
*/

/* 可以通过 type assertion 重新赋值给 Array<T> 类型的数组 */
const array02: Array<number> = array01 as Array<number>;

export {};
