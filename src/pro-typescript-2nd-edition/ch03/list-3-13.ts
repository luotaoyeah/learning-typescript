/**
 * Listing 3-13. Imprecise ambient declaration
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

declare var $: any;

$("#div").html("hello");

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
