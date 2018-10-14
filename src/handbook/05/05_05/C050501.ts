/*
 * Functions
 *     this
 *         this and arrow functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数中的 this 会在函数调用的时候进行设置，因此当函数在不同的上下文中执行时，
   * 函数中的 this 可能会指向不同的值；
   * 如：直接调用函数，函数中的 this 为全局对象；
   */
  function fn01(this: any) {
    console.log(this === global);
  }

  fn01(); // true
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如下：person.create() 方法返回的是另一个函数，当直接调用该函数时，
   * 函数中的 this 为全局对象；
   */
  const person = {
    name: "tom",
    create() {
      return function(this: any) {
        console.log(this === person, this === global);
      };
    }
  };

  person.create()(); // false true

  /*
   * 解决方法一：将 person.create() 方法返回的函数的 this 通过 Function.bind() 方法绑定到 person 对象；
   */
  person.create().bind(person)(); // true false

  /*
   * 解决方法二：将返回的函数定义为箭头函数；
   * 箭头函数会在定义的时候捕获 this，而不是在调用的时候设置 this；
   */
  const person02 = {
    name: "tom",
    create() {
      return () => {
        console.log(this === person02);
      };
    }
  };

  person02.create()(); // true
}

export {};
