(function() {
  /*
   * 如果 const 变量是一个对象，则该对象本身不能被重新赋值，
   * 但是对象的属性依然可以被重新赋值；
   */
  console.log("\n-------------------------------------------------- 01");

  const person = { name: "foo", age: 18 };

  /*
    // TS2540: Cannot assign to 'person' because it is a constant or a read-only property.
    person = {};
  */

  person.name = "bar";
  person.age = 19;

  /* { name: 'bar', age: 19 } */
  console.log(person);
})();
