/**
 * Listing 1-21. Indexed types
 */

interface IPerson {
  name: string;
  age: number;
}

interface IPersonDict {
  [index: string]: IPerson;
}

const personDict: IPersonDict = {};

personDict.a = {
  name: "toma",
  age: 28
};

personDict[0] = {
  name: "tom0",
  age: 18
};

personDict[5] = {
  name: "tom5",
  age: 18
};

/* remove an item */
delete personDict[0];

console.log(personDict);

export {};
