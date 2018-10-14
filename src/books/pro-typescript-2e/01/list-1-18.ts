/**
 * Listing 1-18. Intersection Types
 */

interface IPerson {
  f1(): void;
}

interface IStudent {
  f2(): string;
}

type IntersectionType = IPerson & IStudent;

let person: IntersectionType = {
  f1() {
    console.log("from IPerson");
  },
  f2() {
    console.log("from IStudent");
    return "";
  }
};

person.f1();
person.f2();

export {};
