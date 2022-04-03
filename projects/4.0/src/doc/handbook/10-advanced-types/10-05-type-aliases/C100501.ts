/*
 * Advanced Types
 *     Type Aliases
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 类型别名（type alias）：使用 type 关键字，给某个类型起一个新的名字
   */

  type Str = string;
  type Fn = () => string;
  type StrOrFn = Str | Fn;

  function getName(name: StrOrFn): string {
    if (typeof name === "string") {
      return name;
    } else {
      return name();
    }
  }

  console.log(getName("foo")); // foo
  console.log(getName(() => "foo")); // foo
}
