/*
 * Advanced Types
 *     Type Guards and Differentiating Types
 */

console.log('\n-------------------------------------------------- 01');
{
  /*
   * 当一个对象的类型是 union type 时，如何在 runtime 确定它的具体类型呢?
   * 可以通过判断它是否拥有某个属性，来判断它是否是某个类型；
   */

  interface IFoo {
    x(): void;

    y(): void;
  }

  interface IBar {
    x(): void;

    z(): void;
  }

  function fn01(obj: IFoo | IBar) {
    /*
     * 在这里，需要使用类型断言（type assertion）
     */
    // @ts-ignore
    if ((obj as IFoo).y) {
      (obj as IFoo).y();
    } else {
      (obj as IBar).z();
    }
  }

  fn01({
    x() {},
    y() {
      console.log('y');
    },
  }); // y

  fn01({
    x() {},
    z() {
      console.log('z');
    },
  }); // z
}
