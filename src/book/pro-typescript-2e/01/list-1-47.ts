/**
 * Listing 1-47. Object destructuring with rest parameter
 */

const person = { name: "tom", age: 18, score: 100 };

const { name, ...restProperties } = person;

/* {age: 18, score: 100} */
console.log(restProperties);

export {};
