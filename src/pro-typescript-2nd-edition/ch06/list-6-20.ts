/**
 * Listing 6-20. Local storage and events
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

localStorage.setItem("time", Date.now().toString());

window.addEventListener("storage", (e: StorageEvent) => {
  console.log(`${e.key} "${e.oldValue}" "${e.newValue}"`); // tslint:disable-line
});

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
