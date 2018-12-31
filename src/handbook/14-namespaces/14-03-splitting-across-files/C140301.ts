/*
 * Namespaces
 *     Splitting Across Files
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以将同一个 namespace 的不同部分，放到不同的文件中去，
 * 其他地方在使用该 namespace 时，看到的就好像：它们还是被放到同一个文件中一样
 */

/*
 * 此时，需要设置 --module 为 amd 或者 system
 * 然后将这些文件编译到同一个 JS 文件中去：
 *     tsc --outFile output.js IPerson.ts Boy.ts Girl.ts C140301.ts
 */

console.log(new C1403.Boy("tom").gender); // BOY
console.log(new C1403.Girl("lily").gender); // GIRL
