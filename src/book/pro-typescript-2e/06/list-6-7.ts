/**
 * Listing 6-7. Generic Wrapper Functions
 */

console.log("----------");

const query = <T extends Element>(selector: string): T => {
  return document.querySelector(selector) as T;
};
const element = query<HTMLDivElement>("#content");

console.log(element.innerText);

console.log("----------");
export {};
