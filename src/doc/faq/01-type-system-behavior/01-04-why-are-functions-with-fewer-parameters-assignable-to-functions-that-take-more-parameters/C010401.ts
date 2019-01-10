/*
 * Type System Behavior
 *     Why are functions with fewer parameters assignable to functions that take more parameters?
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 问题如下：
 *     doSomething() 方法的参数 callback 是一个回调函数，
 *     该回调函数定义了两个参数 x 和 y，
 *     为什么在调用 doSomething() 方法的时候，
 *     传递的参数 handle01() 可以只有一个参数 x ？
 *
 * 分析：
 *     在定义回调函数时（形参），函数的参数个数表示：它在调用这个回调函数时，会提供多少个参数，
 *     比如 callback() 回调函数定义了两个参数 x 和 y，
 *     则它再调用 callback() 函数的时候，就一定会提供两个参数给 callback() 函数
 *
 *     在传递回调函数时（实参），函数的参数个数表示：我在使用这个回调函数时，会消耗多少个参数，
 *     蔽日 handle01() 回调函数定义了一个参数 x，
 *     则我在调用 handle01() 函数的时候，只会使用第一个参数，即使 doSomething() 给我传递了两个参数
 */

function doSomething(callback: (x: number, y: number) => void) {
  callback(9, 9);
}

function handle01(x: number) {
  console.log(x);
}

doSomething(handle01); // 9

export {};
