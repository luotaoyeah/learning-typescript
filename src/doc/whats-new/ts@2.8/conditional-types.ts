/**
 * https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#conditional-types
 */

/*
 * T extends U ? X : Y;
 * 条件类型表示的是一个类型：如果 T 可以赋值给 U，则类型为 X，否则类型为 Y；
 * --------------------------------------------------
 */

interface IAnimal {
  live(): void;
}

interface IDog extends IAnimal {
  woof(): void;
}

type Foo = IDog extends IAnimal ? string : number;

// tslint:disable-next-line:prefer-const
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
  : T extends Function // tslint:disable-line:ban-types
  ? "function"
  : "object";

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

interface IId {
  id: number;
}

interface IName {
  name: string;
}

declare function createLabel(id: number): IId;
declare function createLabel(name: string): IName;

/*
 * --------------------------------------------------
 */

type IdOrName<T extends number | string> = T extends number ? IId : IName;

// tslint:disable-next-line:adjacent-overload-signatures
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

type Flatten01<T> = T extends Array<any> ? T[number] : T;

type Flatten02<T> = T extends Array<infer U> ? U : T;

const array = [1, 2, 3];

/* number */
type ElementType = Flatten02<typeof array>;
const element: ElementType = 18;

/*
 * 分发的条件类型；
 * 如果条件类型中被检查的类型（T）仅仅是一个类型参数，则这个条件类型称为'分发的条件类型'；
 * --------------------------------------------------
 */
console.log("----------: distributive conditional types");
type DistributiveType<T> = T extends any ? Array<T> : T;
type DistributedType = DistributiveType<string | number>;
/* string[] | number[] */
let array03: DistributedType = ["a", "b"];
array03 = [1, 2];

console.log("----------: distributive conditional types");
// tslint:disable-next-line:interface-over-type-literal
type BoxedValue<T> = { value: T };
// tslint:disable-next-line:interface-over-type-literal
type BoxedArray<T> = { array: Array<T> };
type Boxed<T> = T extends Array<any> ? BoxedArray<T[number]> : BoxedValue<T>;

type T22 = Boxed<string | Array<number>>;
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
const t23: Diff<string | null | undefined, null | undefined> = "tom";

/*
 * 条件类型可以跟映射类型（mapped type）结合；
 * --------------------------------------------------
 */
console.log("----------: combine with mapped types");
type FunctionPropertyNames<T> = {
  // tslint:disable-next-line:ban-types
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];
type NonFunctionPropertyNames<T> = {
  // tslint:disable-next-line:ban-types
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

// tslint:disable-next-line:interface-name
interface I24 {
  id: number;
  name: string;

  run(): void;

  sleep(): void;
}

/* "run" | "sleep" */
type T24 = FunctionPropertyNames<I24>;
let t24: T24 = "run";
t24 = "sleep";

/* "id" | "name" */
type T25 = NonFunctionPropertyNames<I24>;
let t25: T25 = "id";
t25 = "name";

/*
 * 条件类型可以跟映射类型（mapped type）结合；
 * --------------------------------------------------
 */
console.log("----------: not allowed to reference themselves");
/*
  /!* TS2456: Type alias 'T26' circularly references itself. *!/
  type T26<T> = T extends any[] ? T26<T[number]> : never;
*/

/*
 * 条件类型中的类型推断；
 * 在条件类型的 extends 子句中可以使用关键字 infer 引入类型变量，
 * 引入的类型变量可以在 true 分支中使用；
 * --------------------------------------------------
 */
console.log("----------: type inference in conditional types");
type ReturnType<T> = T extends (...args: Array<any>) => infer R ? R : any;
/* T27 的实际类型为 string */
type T27 = ReturnType<() => string>;
const t27: T27 = "tom";

/*
 * infer 可以嵌套使用；
 * --------------------------------------------------
 */
console.log("----------: nested infer");
type Unpack<T> = T extends Array<infer U>
  ? U // tslint:disable-next-line:no-shadowed-variable
  : T extends (...args: Array<any>) => infer U
  ? U // tslint:disable-next-line:no-shadowed-variable
  : T extends Promise<infer U>
  ? U
  : T;

/* string */
type T28 = Unpack<string>;
/* string */
type T29 = Unpack<Array<string>>;
/* string */
type T30 = Unpack<Promise<string>>;
/* string */
type T31 = Unpack<() => string>;
/* string */
type T32 = Unpack<Unpack<Promise<Array<string>>>>;
const t32: T32 = "tom";

/*
 * 同一个类型变量可以出现在多个不同的地方；
 * 如果出现的位置是协变（co-variant）的关系，则会返回合并类型（union type）；
 * 如果出现的位置时逆变（contra-variant）的关系，则会返回交叉类型（intersection type）；
 * --------------------------------------------------
 */
console.log("----------: multiple locations for the same type variable");

type Foo02<T> = T extends { a: infer U; b: infer U } ? U : never;
/* string | number */
type T33 = Foo02<{ a: string; b: number }>;
let t33: T33 = "tom";
t33 = 18;

type Bar02<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;

/* {name: string} & {age: number} */
type T34 = Bar02<{
  a: (x: { name: string }) => void;
  b: (x: { age: number }) => void;
}>;
const t34: T34 = { name: "tom", age: 18 };

/*
 * 当推断一个重载函数的类型的时候，会从最后一个函数签名进行推断；
 * 因为理论上来讲，最后一个签名是最宽容的，包含了所有的情况；
 * --------------------------------------------------
 */
console.log("----------: infer type of overloaded function");

declare function foo02(x: string): string;
declare function foo02(x: number): number;
declare function foo02(x: string | number): string | number;

/* string | number */
type T35 = ReturnType<typeof foo02>;
let t35: T35 = "tom";
t35 = 18;

/*
 * 在普通的类型参数约束中，不能使用 infer 关键字进行类型推断；
 * --------------------------------------------------
 */
console.log(
  "----------: can't use infer in regular type parameter constraint clause"
);
/*
  /!* TS1338: 'infer' declarations are only permitted in the 'extends' clause of a conditional type. *!/
  type ReturnType02<T extends (...args: any[]) => infer R> = R;
*/

/*
 * 在 typescript@2.8 中提供了 5 个预定义的条件类型；
 * Exclude<T, U> ：移除 T 中可以赋值给 U 的类型；
 * Extract<T, U> ：保留 T 中可以赋值给 U 的类型；
 * NonNullable<T> ：移除 T 中的 null 和 undefined；
 * ReturnType<T> ：获取函数 T 的返回类型；
 * InstanceType<T> ：获取构造方法 T 的实例类型；
 * --------------------------------------------------
 */
console.log("----------: predefined conditional types");

export {};
