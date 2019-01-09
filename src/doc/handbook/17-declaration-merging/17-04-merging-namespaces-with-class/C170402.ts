/*
 * Declaration Merging
 *     Merging Namespaces with Function
 */

console.log("\n-------------------------------------------------- 01");
/*
 * namespace 和 function 可以合并
 * 通过这种方式，给 function 对象添加静态属性和方法
 */

function fn() {
  console.log(fn.PI);
}

namespace fn {
  export const PI = 3.14;
  export function fn01() {
    console.log("FN01");
  }
}

fn(); // 3.14
fn.fn01(); // FN01

export {};
