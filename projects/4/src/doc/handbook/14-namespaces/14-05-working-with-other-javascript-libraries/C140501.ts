/*
 * Namespaces
 *     Working with Other JavaScript Libraries
 *         Ambient Namespaces
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 有些 JS 库没有使用 module，而是直接暴露一个全局变量，
 * 如：jQuery
 * 对于这类 JS 库，在定义类型声明（.d.ts）时，
 * 可以使用 ambient namespace 来声明这个全局变量
 */

jQuery.ajax().then(function(res) {
  console.log(res);
});

$.ajax().then(function(res) {
  console.log(res);
});

export {};
