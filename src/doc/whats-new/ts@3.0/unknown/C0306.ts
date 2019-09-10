/*
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-unknown-top-type
 *
 * New unknown Top Type
 *     No Property Accesses, Element Accesses Or Function Calls
 */

console.log("\n-------------------------------------------------- 01");
{
  const x: unknown = () => 0;

  // @ts-ignore TS2571: Object is of type 'unknown'.
  console.log(x.name);
  // @ts-ignore TS2571: Object is of type 'unknown'.
  // eslint-disable-next-line dot-notation
  console.log(x["name"]);
  // @ts-ignore TS2571: Object is of type 'unknown'.
  console.log(x());
}

export {};
