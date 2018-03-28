/**
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#conditional-types
 * --------------------------------------------------
 */

/*
 * T extends U ? X : Y;
 * 条件类型表示的是一个类型：如果 T 可以赋值给 U，则类型为 X，否则类型为 Y；
 * --------------------------------------------------
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
 * 获取以'类型名称'为字面量的类型；
 * --------------------------------------------------
 */

type TypeName<T> = T extends string
  ? "string"
  : T extends number
    ? "number"
    : T extends boolean
      ? "boolean"
      : T extends undefined
        ? "undefined"
        : T extends Function ? "function" : "object";

type T0 = TypeName<"tom">;
type T1 = TypeName<18>;
type T2 = TypeName<true>;
type T3 = TypeName<() => void>;
type T4 = TypeName<[1]>;

const t0: T0 = "string";
const t1: T1 = "number";
const t2: T2 = "boolean";
const t3: T3 = "function";
const t4: T4 = "object";

/*
 * --------------------------------------------------
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
 * --------------------------------------------------
 */

type IdOrName<T extends number | string> = T extends number ? Id : Name;

declare function createLabel<T extends number | string>(
  idOrName: T
): IdOrName<T>;

/*
  let a = createLabel("tom");
  let b = createLabel(18);
*/

/*
 * 获取数组的元素类型
 * --------------------------------------------------
 */

type Flatten01<T> = T extends any[] ? T[number] : T;

type Flatten02<T> = T extends Array<infer U> ? U : T;

const array = [1, 2, 3];

/* number */
type ElementType = Flatten02<typeof array>;
const element: ElementType = 18;

/*
 * 获取函数的返回类型
 * --------------------------------------------------
 */

type ReturnTypeOf<T> = T extends ((...args: any[]) => infer R) ? R : T;

function f01(): string {
  return "tom";
}

type ReturnType = ReturnTypeOf<typeof f01>;

const x: ReturnType = "cat";

/*
 * 分发的条件类型；
 * 如果条件类型中被检查的类型（T）仅仅是一个类型参数，则这个条件类型称为'分发的条件类型'；
 * --------------------------------------------------
 */
console.log("----------: distributive conditional types");
type DistributiveType<T> = T extends any ? T[] : T;
type DistributedType = DistributiveType<string | number>;
/* string[] | number[] */
let array03: DistributedType = ["a", "b"];
array03 = [1, 2];

console.log("----------: distributive conditional types");
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T22 = Boxed<string | number[]>;
let t22: T22 = { value: "tom" };
t22 = { array: [1, 2, 3] };

/*
 * 分发的条件类型可以用来过滤合并类型（union type）；
 * --------------------------------------------------
 */
console.log("----------: filter union types");
type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;
/* t23 的类型为 string */
let t23: Diff<string | null | undefined, null | undefined> = "tom";

/*
 * 条件类型可以跟映射类型（mapped type）结合；
 * --------------------------------------------------
 */
console.log("----------: combine with mapped types");
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

interface I24 {
  id: number;
  name: string;
  run(): void;
  sleep(): void;
}

type T24 = FunctionPropertyNames<I24>;
let t24: T24 = "run";
t24 = "sleep";

type T25 = NonFunctionPropertyNames<I24>;
let t25: T25 = "id";
t25 = "name";

export {};
