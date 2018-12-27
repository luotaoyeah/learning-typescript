/*
 * Modules
 *     Export
 *         Export statements
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 除了可以在声明的同时就进行输出之外，
 * 也可以先声明，再输出，此时使用的语法称之为 export statement
 */

const name: string = "FOO";

export { name };

/*
 * 在 export statement 中，可以使用 as 给输出的数据取一个别名
 */
export { name as NAME };
