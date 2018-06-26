/*
 * Any
 */

/*
 * 如果类型不确定，可以定义为 any 类型，
 * 从而绕过编译时的类型检查；
 */

/*
 * any 类型的变量可以被赋值任意类型的值；
 */
console.log("\n-------------------------------------------------- 01");

let foo: any;

foo = "foo";
foo = 18;
foo = true;
/* true */
console.log(foo);

export {};
