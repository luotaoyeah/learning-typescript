/**
 * Listing 1-24. Using mapped types
 */

interface IPerson {
  name: string;
  age: number;
}

/* 4 builtin mapped types */
type ReadonlyPerson = Readonly<IPerson>;
type OptionalPerson = Partial<IPerson>;
type PickPerson = Pick<IPerson, "name">;
type RecordPerson = Record<"teacher" | "student", IPerson>;

let readonlyPerson: ReadonlyPerson = {
  name: "tom",
  age: 18
};

/*
/!* TS2540: Cannot assign to 'name' because it is a constant or a read-only property. *!/
readonlyPerson.name = 'cat';
*/

let optionalPerson: OptionalPerson = {
  name: "tom"
};

/*
/!* TS2322: Type '{ name: string; age: number; }' is not assignable to type 'Pick<IPerson, "name">'. *!/
let pickPerson: PickPerson = {
  name: 'tom',
  age: 18
};
*/

let recordPerson: RecordPerson = {
  student: readonlyPerson,
  teacher: {
    name: "cat",
    age: 19
  }
};

export {};
