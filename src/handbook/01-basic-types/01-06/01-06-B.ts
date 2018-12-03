/*
 * 索引内的元素，其类型是确定的，跟定义时的类型保持一致；
 */
console.log("\n-------------------------------------------------- 01");

const tuple01: [string, number] = ["foo", 9];

const name: string = tuple01[0];
const age: number = tuple01[1];
/* foo 9 */
console.log(name, age);

export {};
