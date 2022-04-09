/*
 * Type System Behavior
 *     Why are function parameters bivariant?
 */

import { A, C, D } from "./C010301";

console.log("\n-------------------------------------------------- 01");
/*
 * 要判断 (d: D) => void 是否可以赋值给 (a: A) => void ？
 * 则首先需要判断 Array<D> 是否可以赋值给 Array<A> ？
 */

const a: A = { x: 9 };
const d: D = { x: 9, z: 9 };

function fn01(as: Array<A>) {}

fn01([d]);

export {};
