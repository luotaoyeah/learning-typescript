/**
 * Listing 1-70. Hybrid types
 */

interface IPerson {
  (name: string): string;

  hello(name: string): void;
}

const getPerson = (): IPerson => {
  let person = function(name: string) {
    return `as a function: ${name}`;
  } as IPerson;

  person.hello = (name: string) => {
    console.log("as an object:", name);
  };

  return person;
};

const person = getPerson();

console.log(person("tom"));
person.hello("cat");

export {};
