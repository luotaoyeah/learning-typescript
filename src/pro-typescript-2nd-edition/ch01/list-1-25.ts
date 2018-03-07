/**
 * Listing 1-25. Type assertions
 */

interface IPerson {
  name: string;
  age: number;
}

interface IStudent {
  name: string;
  score: number;
}

function getSomebody(): IPerson | IStudent {
  return {
    name: "tom",
    score: 100
  };
}

const somebody = getSomebody();

/* both have a name property */
console.log(somebody.name); // tslint:disable-line

/* type assertion */
console.log((somebody as IStudent).score); // tslint:disable-line

export {};
