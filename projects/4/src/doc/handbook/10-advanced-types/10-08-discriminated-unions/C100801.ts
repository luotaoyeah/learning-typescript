/*
 * Advanced Types
 *     Discriminated Unions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * discriminated union（可区分的联合类型），是一种特殊的 union type，其组成要素有三点：
   *     1. 多个简单类型组成一个 union type
   *     2. 这些简单类型都有一个相同的属性，且这个属性的类型是 string literal type
   *        这个属性称之为 discriminant（或者 tag）
   *     3. 使用这个属性实现 type guard
   *
   * 这种模式就称之为 discriminated union
   */

  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Rectangle {
    kind: "rect";
    width: number;
    height: number;
  }

  interface Square {
    kind: "square";
    width: number;
  }

  function calcArea(shape: Circle | Rectangle | Square) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "rect":
        return shape.width * shape.height;
      case "square":
        return shape.width * shape.width;
    }
  }

  console.log(calcArea({ kind: "circle", radius: 9 })); // 254.46900494077323
}

export {};
