/**
 * Listing 1-45. Object destructuring
 */

const person = { name: "tom", age: 18 };

/* {[pattern]: [variable]} */
const { name: n, age: a } = person;

/* 'tom' */
console.log(n);

/* 18 */
console.log(a);

export {};
