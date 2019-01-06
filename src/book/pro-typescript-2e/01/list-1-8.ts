/**
 * Listing 1-8. Type annotations
 */

/* primitive type annotaiton */
const name: string = "Foo";
const age: number = 18;
const isOld: boolean = false;

/* array type annotation */
const names: string[] = ["foo", "bar"];

/* function annotation with parameter type annotation and return type annotation */
const sayHello: (name: string, age: number) => string = (name: string) => {
  return `hello ${name}`;
};

/* object type annotation */
const person: { name: string; age: number } = {
  name: "tom",
  age: 18
};

export {};
