/*
 * Modules
 *     Do not use namespaces in modules
 */

console.log("\n-------------------------------------------------- 01");
/*
 * namespace 的主要作用：
 *     1. 组织代码，将同一类的代码放到同一个 namespace 中，方便管理
 *     2. 防止命名冲突
 *
 * 在 module 系统中，这两个作用已经被 module 解决掉了：
 *     1. 因为 module 是必须依赖不同的文件路径的，
 *        即不同的文件（module）可以通过放到同一个文件夹中，
 *        来实现组织代码的功能
 *     2. 引入数据时，可以给引入的数据起别名，
 *        可以防止命名冲突：
 *        import * as obj from 'mod';
 *        import { a as b } from 'mod';
 */

/*
 * 因此，除非有必要，否则尽量不要再使用 namespace
 */
