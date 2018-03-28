/**
 * Listing 1-89. Type constraints
 */

class Person {
  name: string;
}

class Student {
  score: number;
}

interface PersonAndStudent extends Person, Student {}

function genericConstraintExample<T extends PersonAndStudent>(t: T): void {
  console.log(t.name);
  console.log(t.score);
}

function genericConstraintExample02<T extends Person & Student>(t: T): void {
  console.log(t.name);
  console.log(t.score);
}

genericConstraintExample({
  name: "tom",
  score: 99
});

genericConstraintExample02({
  name: "cat",
  score: 100
});

export {};
