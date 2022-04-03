/**
 * Listing 1-9. Interface and type alias
 */

/* interface */

interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "tom",
  age: 18
};

/* type alias */
type PersonType = {
  name: string;
  age: number;
};

const person2: PersonType = {
  name: "tom",
  age: 18
};

export {};
