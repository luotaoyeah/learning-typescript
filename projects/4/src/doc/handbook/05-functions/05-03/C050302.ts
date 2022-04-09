/*
 * Functions
 *     Optional and Default Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数参数可以设置默认值，当该参数没有传值或者传递的是 undefined 时，
   * 该参数的值会被设为默认值；
   */

  function fn01(x: string, y: string = "bar") {
    console.log(x, y);
  }

  fn01("a"); // a bar
  fn01("a", undefined); // a bar
  fn01("a", "b"); // a b
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 默认值参数可以定义在必选参数的前面，
   * 此时，在调用函数时，默认参数必须传值（可以传递 undefined），不能省略；
   */

  function fn01(x: string = "foo", y: string) {
    console.log(x, y);
  }

  fn01(undefined, "b"); // foo b
  fn01("a", "b"); // a b
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 当默认值参数定义在必选参数的后面时，被视为可选参数，调用时可以省略该参数，
   * 并且此时，函数类型跟参数定义为可选参数时的函数类型也是一样的；
   */

  type Fn = (x: string, y?: string) => void;
  const fn01: Fn = function(x: string, y?: string) {};
  const fn02: Fn = function(x: string, y: string = "bar") {};
}

export {};
