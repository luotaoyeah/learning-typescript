/**
 * Listing 6-5. Getting elements by HTML tag
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

const elements: NodeListOf<HTMLDivElement> = document.getElementsByTagName('div');
const element: HTMLDivElement = elements[0];

console.log(element.innerText); // tslint:disable-line

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};