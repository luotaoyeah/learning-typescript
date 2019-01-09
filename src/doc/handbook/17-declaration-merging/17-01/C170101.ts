/*
 * Declaration Merging
 *     Basic Concepts
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 声明合并（declaration merging）是比较高层次的抽象概念，
 * 表示将多个相同名称的定义，合并到一个定义里面
 *
 * TS 中的声明（declaration）有三种类型：
 *     namespace，type，value
 * 其中 value 会被编译到最终的 JS 中，而 namespace 和 type 只存在于 TS 中
 * 各个不同类型所属的声明类型如下：
 *     declaration    namespace   type    value
 *     ----------------------------------------
 *     namespace      *                   *
 *     interface                  *
 *     class                      *       *
 *     enum                       *       *
 *     type alias                 *
 *     function                           *
 *     variable                           *
 */

export {};
