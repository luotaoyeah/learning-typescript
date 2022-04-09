/*
 *
 */

console.log("\n-------------------------------------------------- 01");

interface ILabel {
  label: string;
}

function printLabel(obj: ILabel): void {
  console.log(obj.label);
}

/*
 * 对象不一定要直接继承自某个 interface，只要满足 interface 的要求即可；
 */
const obj01 = { name: "foo", label: "bar" };
printLabel(obj01);

export {};
