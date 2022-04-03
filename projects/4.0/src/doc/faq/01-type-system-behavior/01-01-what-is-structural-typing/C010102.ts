/*
 * Type System Behavior
 *     What is structural typing?
 */

console.log("\n-------------------------------------------------- 01");

class A {
  x: number;
}

class B extends A {}

let a: A = { x: 9 };
let b: B = { x: 9 };

/*
 * 虽然 B 继承了 A，但是在判断它们的类型是否兼容时，
 * 并不会考虑它们的继承关系，而只会考虑它们的成员的类型是否兼容
 */
a = b;
b = a;

console.log(a);
console.log(b);

export {};
