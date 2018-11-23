/*
 * Functions
 *     Overloads
 */

class Person {
  name: string;
  age: number;
}

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 由于 JS 的动态特性，经常需要根据不同的函数参数，返回不同的结果；
   */

  function fn01(x: any) {
    /*
     * 在方法内部，判断参数的类型
     */
    if (typeof x === "object") {
      console.log("object");
    } else if (typeof x === "number") {
      console.log("number");
    }
  }

  fn01(9); // number
  fn01({ name: "tom", age: 18 }); // object
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 给这种函数标注类型的时候，需要使用方法重载（overload），即给一个方法标注多个类型；
   * 方法重载只有方法签名，没有方法实现；
   * 如：下面有两个方法重载，最后一个具有方法体的是方法实现，不是方法重载；
   */
  function fn01(age: number): void;
  function fn01(person: Person): void;
  function fn01(x: any): void {
    if (x instanceof Person) {
      console.log(x.age);
    } else {
      console.log(x.toFixed(2));
    }
  }

  fn01(9); // 9.00

  const person = new Person();
  person.age = 18;
  person.name = "tom";
  fn01(person); // 18
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 编译器在匹配方法重载时，会从上到下依次匹配，知道找到匹配的方法重载，
   * 因此，一般的惯例是：按照类型精确程度由大到小的顺序排列方法重载列表；
   */
}

export {};
