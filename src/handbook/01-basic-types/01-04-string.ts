/*
 * string 类型支持 template string，使用（`）包裹，可以跨越多行，
 * 支持 expression 嵌入；
 */

console.log("\n-------------------------------------------------- 01");

const name: string = "foo";
const age: number = 18;
const message: string = `My name is ${name},
I am ${age + 1} years old.`;

/*
 * My name is foo,
 * I am 19 years old.
 */
console.log(message);

export {};
