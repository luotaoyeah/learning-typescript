/**
 * Listing 6-5. Getting elements by HTML tag
 */

console.log("----------");

const elements: HTMLCollectionOf<
  HTMLDivElement
> = document.getElementsByTagName("div");
const element: HTMLDivElement = elements[0];

console.log(element.innerText);

console.log("----------");
export {};
