/*
 * Modules
 *     Import
 *         Import the entire module into a single variable, and use it to access the module exports
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以将某个模块作为一个对象整个引入，
 * 然后通过该对象上的数据，访问该模块输出的数据
 */

import * as obj from "../../13-02-export/13-02-01/C13020101";

console.log(obj.name); // FOO

obj.fn(); // FN

const bar: obj.T = "BAR";
console.log(bar); // BAR
