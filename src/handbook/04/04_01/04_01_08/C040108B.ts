/*
 * Classes
 *     Advanced Techniques
 *         Using a class as an interface
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 因为类具有静态特性，所有类可以当做接口来使用，
   * 在任何可以使用接口的地方，都可以使用类；
   */

  class Point2D {
    x: number;
    y: number;
  }

  // 类可以被接口继承
  interface IPoint3D extends Point2D {
    z: number;
  }

  const poing3D: IPoint3D = {
    x: 1,
    y: 1,
    z: 1
  };
}

export {};
