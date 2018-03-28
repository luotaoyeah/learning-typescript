/**
 * Listing 6-8. Updating the element’s HTML
 */

console.log("----------");

const div: HTMLDivElement = document.querySelector(
  "#content"
) as HTMLDivElement;
div.innerHTML = "<span>new content</span>";

console.log("----------");
export {};
