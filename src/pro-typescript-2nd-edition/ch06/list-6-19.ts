/**
 * Listing 6-19. Removing and clearing session storage
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

sessionStorage.removeItem("name");
sessionStorage.clear();

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
