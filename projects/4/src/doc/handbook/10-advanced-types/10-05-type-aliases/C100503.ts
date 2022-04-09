/*
 * Advanced Types
 *     Type Aliases
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 类型的某个属性的类型，可以是该类型本身
   */

  type Tree = {
    value: string;
    left?: Tree;
    right?: Tree;
  };

  const tree: Tree = {
    value: "1",
    left: { value: "1-1" },
    right: { value: "1-2" }
  };

  console.log(tree); // { value: '1', left: { value: '1-1' }, right: { value: '1-2' } }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 类型本身可以作为某个属性的类型，
   * 但是除此之外，其他地方不能使用类型本身
   */

  type Tree<T> = {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;
  };

  type Gen = {
    value: Array<Gen>;
  };

  /*
    type WrongType = Array<WrongType>; // TS2456: Type alias 'WrongType' circularly references itself.
  */
}
