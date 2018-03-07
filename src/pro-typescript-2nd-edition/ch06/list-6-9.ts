/**
 * Listing 6-9. Using appendChild
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

const contentElement: HTMLDivElement = document.querySelector('#content') as HTMLDivElement;

const childElement01: HTMLDivElement = document.createElement('div');
childElement01.textContent = 'child01';

const childElement02: HTMLSpanElement = document.createElement('span');

childElement02.textContent = 'child02';

contentElement.appendChild(childElement01);
contentElement.appendChild(childElement02);

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};