/**
 * Listing 6-7. Generic Wrapper Functions
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

const query = <T extends Element>(selector: string): T => {
  return document.querySelector(selector) as T;
};
const element = query<HTMLDivElement>("#content");

console.log(element.innerText); // tslint:disable-line

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
