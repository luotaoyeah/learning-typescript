/**
 * Listing 6-4. Finding DOM elements
 */

console.log('Listing 6-4. Finding DOM elements'); // tslint:disable-line
console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

const a: HTMLElement | null = document.getElementById('content');
console.log(a!.innerText); // tslint:disable-line

const b: Element | null = document.querySelector('#content');
console.log(b!.innerHTML); // tslint:disable-line

const c: HTMLDivElement = document.querySelector('#content') as HTMLDivElement;
console.log(c.innerText); // tslint:disable-line

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};