/**
 * Listing 1-50. Tuples and Destructuring
 */

function tupleAndDestructureExamp(): [string, number] {
  return ["tom", 18];
}

/* destructure tupes into named variables */
const [name, age] = tupleAndDestructureExamp();

/* 'tom' */
console.log(name); // tslint:disable-line

/* 18 */
console.log(age); // tslint:disable-line

export {};
