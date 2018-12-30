/*
 * Modules
 *     Guidance for structuring modules
 *         Export as close to top-level as possible
 *         If you’re only exporting a single class or function, use export default
 *         Use the namespace import pattern if you’re importing a large number of things
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 尽量将输出放到最顶层，不要使用不必要的嵌套层次，
 * 比如：
 *     不要使用不必要的 namespace
 *     可以考虑将 static method 输出为单独的 helper function
 */

/*
 * 如果某个 module 只是输出了一个 class 或者 function
 * 可以考虑使用 export default
 */

/*
 * 如果从同一个 module 里面引入了很多数据，
 * 可以考虑使用 namespace import pattern
 * 即将该 module 引入为一个对象，使用该对象的属性访问各个数据：
 *     import * as obj from 'mod'
 */
