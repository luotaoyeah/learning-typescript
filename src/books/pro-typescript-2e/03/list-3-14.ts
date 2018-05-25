/**
 * Listing 3-14. Ambient class and function
 */

console.log("----------");

interface JQuery {
  html(content: string): void;
}

declare function $(query: string): JQuery;

$("#div").html("hello world");

console.log("----------");
export {};
