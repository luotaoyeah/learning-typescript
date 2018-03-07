/**
 * Listing 6-10. Using insertBefore
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

const contentElement: HTMLDivElement = document.querySelector(
  "#content"
) as HTMLDivElement;

const childElement01: HTMLDivElement = document.createElement("div");
childElement01.textContent = "child01";

const childElement02: HTMLDivElement = document.createElement("div");

childElement02.textContent = "child02";

contentElement.insertBefore(childElement01, contentElement.firstChild);
contentElement.appendChild(childElement02);

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
