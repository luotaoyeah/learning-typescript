(function() {
  /*
   * object spreading 只会作用于 own enumerable 的属性；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = Object.create(
    { x: 1 },
    {
      y: {
        value: 2,
        writable: true,
        configurable: true
      },
      z: {
        value: 3,
        enumerable: true,
        writable: true,
        configurable: true
      }
    }
  );

  /* { a: 'a', z: 3 } */
  console.log({ a: "a", ...obj01 });
})();
