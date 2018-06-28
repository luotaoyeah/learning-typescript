/*
 * 当 object destructuring 用在 function 的 parameters 处，
 * 且同时结合了 default value 和 type annotation 时，
 * 需要注意最终的解构结果；
 */
(function() {
  console.log("\n-------------------------------------------------- 01");

  function fn01({ a, b = 9 }: { a: string; b?: number } = { a: "bar" }) {
    console.log(a, b);
  }

  /*
   * 参数为 undefined，因此使用默认值：{ a: "bar" }，
   * 又因此使用 b 的默认值：9；
   * fn01() 等价于 fn01({ a: "bar" })；
   */
  /* bar 9 */
  fn01();
  /* foo 9 */
  fn01({ a: "foo" });
  /* foo 0 */
  fn01({ a: "foo", b: 0 });

  /*
    // TS2345: Argument of type '{}' is not assignable to parameter of type '{ a: string; b?: number; }'.
    // Property 'a' is missing in type '{}'.
    fn01({});
  */
})();
