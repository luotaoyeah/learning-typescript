/* eslint-disable no-duplicate-imports */
/*
 * Modules
 *     Import
 *         Import a single export from a module
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 使用 import...from 语句，从某个模块中引入数据
 */
import { name } from "../../13-02-export/13-02-01/C13020101";
console.log(name); // FOO

console.log("\n-------------------------------------------------- 02");
/*
 * 在引入的时候，可以使用 as 给引入的数据重新取一个名字，
 * 这个特性可以避免命名冲突
 */
import { name as NAME } from "../../13-02-export/13-02-01/C13020101";
console.log(NAME); // FOO
