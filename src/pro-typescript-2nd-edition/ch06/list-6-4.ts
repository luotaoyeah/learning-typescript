/**
 * Listing 6-4. Finding DOM elements
 */

console.log("Listing 6-4. Finding DOM elements");
console.log("----------");

const a: HTMLElement | null = document.getElementById("content");
console.log(a!.innerText);

const b: Element | null = document.querySelector("#content");
console.log(b!.innerHTML);

const c: HTMLDivElement = document.querySelector("#content") as HTMLDivElement;
console.log(c.innerText);

console.log("----------");
export {};
