/*
 * Advanced Types
 *     Conditional Types
 *         Distributive conditional types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当可分发的条件类型中的 T 是一个联合类型时，
   * 其结果类型为：
   *     将 T 中的每一个成员类型拿出来，作为条件，创建一个新的条件类型，
   *     然后将所有这些新的条件类型，组成一个联合类型，即：
   *         string | number extends U ? X : Y
   *         的结果类型为：
   *         (string extends U ? X : Y) | (number extends U ? X : Y)
   *
   * 因为 T 是一个类型参数，因此 X 和 Y 可能会继续引用 T，
   * 此时在 X 中，类型参数 T 会新增一个泛型约束：T extends U
   */

  type BoxValue<T> = { value: T };
  type BoxArray<T> = { value: Array<T> };
  /*
   * 因为（在 X 中，类型参数 T 会新增一个泛型约束：T extends U），
   * 因此，在 BoxArray<T[number]> 中，T extends Array<any>
   * 即此时 T 肯定是一个数组，因此可以使用 T[number] 表示数组元素的类型
   */
  type Box<T> = T extends Array<any> ? BoxArray<T[number]> : BoxValue<T>;

  /*
   * T01 的实际类型为：{ value: string }
   */
  type T01 = Box<string>;
  const t01: T01 = { value: "FOO" };

  /*
   * T02 的实际类型为：{ value: Array<number> }
   */
  type T02 = Box<Array<number>>;
  const t02: T02 = { value: [9] };

  /*
   * T03 的实际类型为：T01 | T02
   * 即：{ value: string } | { value: Array<number> }
   */
  type T03 = Box<string | Array<number>>;
  let t03: T03 = t01;
  t03 = t02;
}

export {};
