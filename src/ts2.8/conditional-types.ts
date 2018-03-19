/**
 * Const-named properties
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

/*
 * ----------------------------------------------------------------------------------------------------
 */

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Foo = Dog extends Animal ? string : number;

let foo: Foo = "tom";

/*
  /!* TS2322: Type '18' is not assignable to type 'string'. *!/
  let bar: Foo = 18;
*/

/*
 * ----------------------------------------------------------------------------------------------------
 */

interface Id {
  id: number;
}

interface Name {
  name: string;
}

declare function createLabel(id: number): Id;
declare function createLabel(name: string): Name;

/*
 * ----------------------------------------------------------------------------------------------------
 */

type IdOrName<T extends number | string> = T extends number ? Id : Name;

declare function createLabel<T extends number | string>(
  idOrName: T
): IdOrName<T>;

let a = createLabel("tom");
let b = createLabel(18);

/*
 * get the type of element of an array
 * ----------------------------------------------------------------------------------------------------
 */

type Flatten01<T> = T extends any[] ? T[number] : T;

type Flatten02<T> = T extends Array<infer U> ? U : T;

const array = [1, 2, 3];

/* number */
type ElementType = Flatten02<typeof array>;
const element: ElementType = 18;

/*
 * get the return type of a function
 * ----------------------------------------------------------------------------------------------------
 */

type ReturnTypeOf<T> = T extends ((...args: any[]) => infer R) ? R : T;

function f01(): string {
  return "tom";
}

type ReturnType = ReturnTypeOf<typeof f01>;

const x: ReturnType = "cat";

/*
 * type being distributed
 * ----------------------------------------------------------------------------------------------------
 */

type DistributeType<T> = T extends any ? T[] : T;

type DistributedType = DistributeType<string | number>;

/* string[] | number[] */
let array03: DistributedType = ["a", "b"];
array03 = [1, 2];

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
