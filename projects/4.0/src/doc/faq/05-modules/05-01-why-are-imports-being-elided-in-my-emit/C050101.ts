/*
 * Modules
 *     Why are imports being elided in my emit?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 问题描述:
 *     为什么在 TS 中引入了一个模块, 但是在生成的 JS 中没有这个模块？
 */

import { PathLike } from "fs";
const data: PathLike = {} as PathLike;

console.log("\n-------------------------------------------------- 02");
/*
 * 问题分析:
 *     TS 认为一个模块的引入是没有 side effects 的,
 *     因此, 如果引入的数据没有用在某个 expression 中, 比如只是作为类型使用,
 *     那么在编译时候, 这些数据都会被清除
 *
 *     如果要使引入的模块具有 side effects, 需要直接使用 `import "mod"` 的形式来引入
 */

// eslint-disable-next-line no-duplicate-imports
import "fs";

export {};
