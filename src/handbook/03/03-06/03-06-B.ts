/*
 * index signature 中 index 的类型可以是 string 或者 number，且可以同时存在；
 * 此时，number 类型对应的属性值的类型，必须是 string 类型对应的属性值的类型的子类型；
 * 因为在 JS 中，number 类型的索引会先转换为 string 类型的索引，
 * 即 obj[0] 会先转换为 obj["0"]；
 */
console.log("\n-------------------------------------------------- 01");

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

class Person {
  age: number;
}

/*
  // TS2413: Numeric index type 'Person' is not assignable to string index type 'Animal'.
  interface IAnimal {
    [index: string]: Animal;
    [index: number]: Person;
  }
*/

interface IHuman {
  [index: string]: Animal;
  [index: number]: Dog;
}

export {};
