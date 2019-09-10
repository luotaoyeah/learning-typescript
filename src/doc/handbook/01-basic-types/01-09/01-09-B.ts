/*
 * 不建议将变量的类型定义为 void 类型；
 *
 * 当 --strictNullChecks: true 时，void 类型的变量只能被赋值为 undefined；
 * 否则，可以被赋值为 undefined 或者 null；
 */
console.log("\n-------------------------------------------------- 01");

const foo: void;

/*
  // 当 --strictNullChecks: true 时，不能赋值为 null；
  // TS2322: Type 'null' is not assignable to type 'void'.
  foo = null;
*/

export {};
