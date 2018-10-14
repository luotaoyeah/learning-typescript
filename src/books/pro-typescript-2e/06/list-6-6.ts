/**
 * Listing 6-6. Getting elements using CSS selectors
 */

console.log("----------");

const elements: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  "#content"
);
const element: HTMLDivElement = elements[0];

console.log(element.innerText);

console.log("----------");
export {};
