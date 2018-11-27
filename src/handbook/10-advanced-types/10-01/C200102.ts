/*
 * Advanced Types
 *     Intersection Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果两个相交的类型有同名的属性，且该属性的类型不一样，
   * 则相交之后，该属性的类型也是两个属性类型的相交类型；
   */

  /*
   * IFoo 的 name 属性是 string 类型，
   * IBar 的 name 属性是 number 类型，
   * 则相交之后，name 属性的类型为 string & number
   */
  interface IFoo {
    name: string;
  }

  interface IBar {
    name: number;
  }

  const obj: IFoo & IBar = { name: "foo" as string & number };
  console.log(obj.name); // foo
}
