/**
 * Listing 1-52. Object spreading
 */

const obj01 = { name: "tom" };
const obj02 = { age: 18 };
const obj03 = { ...obj01, ...obj02 };

/* {name: 'tom', age: 18} */
console.log(obj03);

export {};
