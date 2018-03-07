/**
 * Listing 1-15. Union types
 */

let foo: number | boolean;

foo = 18;
foo = true;

/*
/!* TS2322: Type '"str"' is not assignable to type 'number | boolean'. *!/
foo = 'str';
*/

/* type alias for union type */
type UnionType = string | symbol;

export {};