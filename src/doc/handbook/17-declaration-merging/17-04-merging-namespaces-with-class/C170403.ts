/*
 * Declaration Merging
 *     Merging Namespaces with Enum
 */

console.log("\n-------------------------------------------------- 01");
/*
 * namespace 和 enum 可以进行合并
 * 通过这种方式，给 enum 对象添加静态属性和方法
 */

enum E {
  X,
  Y
}

// eslint-disable-next-line @typescript-eslint/no-namespace,no-redeclare
namespace E {
  export function fn01() {
    console.log(E.X, E.Y);
  }
}

E.fn01(); // 0 1

export {};
