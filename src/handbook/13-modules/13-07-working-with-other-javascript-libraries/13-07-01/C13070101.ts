/*
 * Modules
 *     Working with Other JavaScript Libraries
 *         Ambient Modules
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 如果要在 TS 代码中使用第三方的 JS 代码库，
 * 则需要为它们的 API 提供类型声明，这些声明没有真正的实现（真正的实现就是这些 JS 代码），
 * 因此这些声明称之为 ambient
 * 通常将这些声明放在一个单独的 .d.ts 文件中（当然也可以直接放到 .ts 文件中）
 */

/*
 * 对于 module 来说，可以将每个 module 分别放在一个单独的 .d.ts 文件中，
 * 这时，在每个 .d.ts 文件中，可以直接在顶层使用 export 定义输出的数据
 *
 * 也可以将多个 module 放到一个 .d.ts 文件中，
 * 这时，需要使用 declare module 'somemod' {} 的形式来声明每个 module 的 API
 */

/*
 * TS 会自动检测到所有的 .d.ts 文件，
 * 并用这些文件中的声明来进行编译时的类型检查，
 * 但是，如果在运行时，这些声明对应的实现不存在，则会运行报错
 */

import * as foo from "foo";

console.log(foo.c);
foo.f();
console.log(new foo.C());
const i: foo.I = { i: 9 };
const t: foo.T = "T";
foo.default().toUpperCase();
