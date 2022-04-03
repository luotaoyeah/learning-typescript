/*
 * Never
 */

/*
 * never 类型通常用来表示一个函数的返回类型，
 * 该函数要么总是会抛出一个异常，要么永远不会返回；
 */
console.log("\n-------------------------------------------------- 01");

function fn01(): never {
  throw new Error("error");
}

function fn02(): never {
  // eslint-disable-next-line no-empty
  while (true) {}
}

export {};
