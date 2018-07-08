/*
 * interface
 */

/*
 * TS 的类型检查是 duck-typing（structural subtyping）的；
 */

console.log("\n-------------------------------------------------- 01");

/**
 *
 * @param obj
 */
function printLabel(obj: { label: string }): void {
  console.log(obj.label);
}

const obj01 = { label: "foo", name: "bar" };
printLabel(obj01);

export {};
