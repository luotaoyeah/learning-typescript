/**
 * Listing 1-50. Tuples and Destructuring
 */

function tupleAndDestructureExamp(): [string, number] {
  return ["tom", 18];
}

/* destructure tupes into named variables */
const [name, age] = tupleAndDestructureExamp();

/* 'tom' */
console.log(name);

/* 18 */
console.log(age);

export {};
