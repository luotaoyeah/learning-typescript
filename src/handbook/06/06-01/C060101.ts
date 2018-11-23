/*
 * Generics
 *     Introduction
 *     Hello World of Generics
 */

/*
 * 泛型（generic）即类型参数化；
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如下：函数 identity() 直接返回参数，即参数的类型和返回的类型是一样的；
   */
  function identity(x: number): number {
    return x;
  }

  /*
   * 如果要将 identity() 函数泛型化，一种方法是使用 any 类型，
   * 这种方法的缺陷是：因为返回的类型被标注为 any，所以返回值的类型已经丢失，
   *     例如：如果参数为 number 类型，返回值的类型并不会被推断为 number 类型，而是为 any 类型；
   */
  function identity02(x: any): any {
    return x;
  }

  identity02(9);
  identity02("tom");
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 泛型（generic）是一种类型变量（type variable），不同于的普通的值变量（value variable），
   * 泛型可以捕获参数的类型，并在其他地方使用该类型；
   * 如下：定义了一个类型变量 T，并使用该类型变量，标注了参数的类型和返回的类型；
   */
  function identity<T>(x: T): T {
    return x;
  }

  identity(9);
  identity("tom");
}

console.log("\n-------------------------------------------------- 03");
{
  function identity<T>(x: T): T {
    return x;
  }

  /*
   * 调用泛型方法的时候，可以显式地标注类型参数；
   */
  identity<number>(9);

  /*
   * 可以不标注泛型参数，由编译器根据函数参数的类型，推断泛型参数的类型；
   */
  identity("tom");
}

export {};
