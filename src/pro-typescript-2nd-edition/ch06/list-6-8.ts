/**
 * Listing 6-8. Updating the element’s HTML
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

const div: HTMLDivElement = document.querySelector('#content') as HTMLDivElement;
div.innerHTML = '<span>new content</span>';

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};