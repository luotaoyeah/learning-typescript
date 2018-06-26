/*
 * Object
 */

/*
 * object 类型表示 non-primitive 类型；
 * primitive 类型是指：string，number，boolean，symbol，null，undefined；
 */
console.log("\n-------------------------------------------------- 01");

declare function create(proto: object | null): object;

create(null);
create({});
create([]);

/*
  // TS2345: Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
  create(undefined);
  // TS2345: Argument of type '"foo"' is not assignable to parameter of type 'object | null'.
  create("foo");
  // TS2345: Argument of type '18' is not assignable to parameter of type 'object | null'.
  create(18);
  // TS2345: Argument of type 'true' is not assignable to parameter of type 'object | null'.
  create(true);
  // TS2345: Argument of type 'symbol' is not assignable to parameter of type 'object | null'.
  create(Symbol("foo"));
*/

export {};
