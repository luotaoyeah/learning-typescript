/*
 * Modules
 *     Default exports
 *        default export alias
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 如果在使用命名输出时，将别名指定为 default，
 * 则该数据会被指定为默认输出
 */

const foo = "FOO";
const bar = "BAR";

export { foo, bar as default };
