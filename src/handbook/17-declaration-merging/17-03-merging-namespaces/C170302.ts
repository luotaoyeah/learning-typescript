/*
 * Declaration Merging
 *     Merging Namespaces
 *        non-exported memberr
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 对于 namespace 中 non-exported 的成员，
 * 在两个 namespace 合并之后，该成员仍然只能被原来的 namespace 中的其他成员访问
 */

namespace N01 {
  const x: number = 9;

  export function fn01() {
    console.log(x);
  }
}

namespace N01 {
  export function fn02() {
    /*
     * x 是在第一个 namespace 中定义的，且没有被 export
     * 因此只能被第一个 namespace 中的其他成员访问，如 fn01() 可以访问 x
     */
    // @ts-ignore
    console.log(x); // TS2304: Cannot find name 'x'.
  }
}

export {};
