/*
 * Classes
 *     Readonly modifier
 *         Parameter properties
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 参数属性（parameter properties）是对属性初始化的一种简写形式；
 */

{
  class Person01 {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Person02 {
    /*
     * 使用参数属性时，参数前面需要使用访问修饰符（public，protected，private）或/和只读修饰符（readonly）；
     */
    constructor(public name: string) {}
  }

  console.log(new Person01("A").name);
  console.log(new Person02("A").name);
}

export {};
