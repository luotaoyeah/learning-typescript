/*
 * Namespaces
 *     Namespacing
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 为了防止 name collision 以及 code organization
 * 可以将所有相关的 interface 和 class 放到一个 namespace 中
 */

namespace C140201 {
  /*
   * 没有使用 export 输出的数据，不能在 namespace 的外面被访问
   */
  const GENDER_BOY = "BOY";
  const GENDER_GIRL = "GIRL";

  export interface IPerson {
    name: string;
    gender: string;
  }

  /*
   * 如果希望外界可以访问该 namespace 中的成员，如下面的 Boy 类，
   * 则需要使用 export 将该类输出到该 namespace 的外面去，
   * 类似于将数据输出到 module 的外面去，以便其他地方可以引入
   */

  export class Boy implements IPerson {
    constructor(public name: string) {}

    get gender() {
      return GENDER_BOY;
    }
  }

  export class Girl implements IPerson {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    get gender() {
      return GENDER_GIRL;
    }
  }
}

/*
 * 访问 namespace 中的数据时，需要加上该 namespace 的名称作为前缀
 */
console.log(new C140201.Boy("tom").gender); // BOY
console.log(new C140201.Girl("lily").gender); // GIRL

/*
 * 没有使用 export 输出的数据，在 namespace 外面不能访问
 */
// @ts-ignore
console.log(C140201.GENDER_BOY); // TS2339: Property 'GENDER_BOY' does not exist on type 'typeof C140201'.
