/*
 * 当访问 tuple 的某个元素时，该元素的类型是可以确定的；
 */
console.log("\n-------------------------------------------------- 01");

const tuple02: [string, number] = ["foo", 9];

const name: string = tuple02[0];
const age: number = tuple02[1];
/* foo 9 */
console.log(name, age);

export {};
