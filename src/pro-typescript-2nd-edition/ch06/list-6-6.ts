/**
 * Listing 6-6. Getting elements using CSS selectors
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

const elements: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  "#content"
);
const element: HTMLDivElement = elements[0];

console.log(element.innerText); // tslint:disable-line

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
