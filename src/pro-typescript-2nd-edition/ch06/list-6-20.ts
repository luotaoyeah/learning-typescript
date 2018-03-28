/**
 * Listing 6-20. Local storage and events
 */

console.log("----------");

localStorage.setItem("time", Date.now().toString());

window.addEventListener("storage", (e: StorageEvent) => {
  console.log(`${e.key} "${e.oldValue}" "${e.newValue}"`);
});

console.log("----------");
export {};
