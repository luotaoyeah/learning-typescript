/*
 * Generics
 *     Generic Classes
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * generic class 跟 generic interface 类似，在类名后面通过 <T> 声明 generic type parameter，
   * 类的所有属性都可以使用该 generic type parameter；
   */

  class GenericClass<T> {
    value: T;
    add: (x: T) => T;
  }

  const genericClass = new GenericClass<number>();
  genericClass.value = 0;
  genericClass.add = function(x) {
    return x * 9;
  };

  const genericClass01 = new GenericClass<string>();
  genericClass01.value = "foo";
  genericClass01.add = x => {
    return x.toUpperCase();
  };
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * class 有两方面的特性：instance side 和 static side，
   * type parameter 只能用在 instance side，不能用在 static side；
   */

  class GenericClass<T> {
    /*
        static foo: T; // Static members cannot reference class type parameters.
    */

    bar: T;
  }
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 可以只将 class 的某个方法声明为 generic function；
   */
  class Person {
    say<T>(arg: Array<T>): void {
      console.log(arg.length);
    }
  }

  const person = new Person();
  person.say<number>([1, 2, 3]); // 3
}

export {};
