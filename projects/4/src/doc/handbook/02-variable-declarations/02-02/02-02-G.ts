(function() {
  /*
   * 对于变量捕获，我们可以这样理解：
   *     每个作用域（function scope，block scope）在执行的时候，
   *     都会创建一个'环境对象'，该'环境对象'包含了该作用域捕获的变量；
   *     当作用域的代码执行完毕之后，该'环境对象'可以继续存在；
   */
  console.log("\n-------------------------------------------------- 01");

  const city: string = (function fn01(): string {
    let getCity: () => string;

    if (true) {
      const ct: string = "chengdu";
      getCity = function(): string {
        return ct;
      };

      return getCity();
    }
  })();

  /* chengdu */
  console.log(city);
})();
