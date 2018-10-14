/**
 * Listing 1-59. Specialized overload signatures
 */

class Person {
  name: string;
}

class Student extends Person {
  score: number = 100;
}

class Teacher extends Person {
  class: string = "class 01";
}

function f(name: "tom"): Student;
function f(name: "cat"): Teacher;
function f(name: string): Person;
function f(name: string): Person {
  switch (name) {
    case "tom":
      return new Student();
    case "cat":
      return new Teacher();
    default:
      return new Person();
  }
}

/* 100 */
console.log(f("tom").score);

/* 'class 01' */
console.log(f("cat").class);

export {};
