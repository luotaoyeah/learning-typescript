/**
 * Listing 6-18. Session storage
 */

console.log("----------");

const key = "name";
console.log("name", sessionStorage.getItem(key));

sessionStorage.setItem(key, "tom");

console.log("name", sessionStorage.getItem(key));

console.log("----------");
export {};
