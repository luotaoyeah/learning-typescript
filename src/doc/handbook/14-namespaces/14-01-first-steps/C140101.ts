/*
 * Namespaces
 *     First steps
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在不使用 module 和 namespace 的情况下，
 * 将所有数据都放到同一个文件中的最顶层
 */

const GENDER_BOY = "BOY";
const GENDER_GIRL = "GIRL";

interface IPerson {
  name: string;
  gender: string;
}

class Boy implements IPerson {
  constructor(public name: string) {}

  get gender() {
    return GENDER_BOY;
  }
}

class Girl implements IPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get gender() {
    return GENDER_GIRL;
  }
}

console.log(new Boy("tom").gender); // BOY
console.log(new Girl("lily").gender); // GIRL
