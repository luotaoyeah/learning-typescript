/**
 * Listing 5-30. Event listeners
 */

console.log("----------");

class ClickLogger {
  constructor() {
    document.addEventListener("click", this.listener);
  }

  listener(e: Event) {
    const eventPhase = e.eventPhase;

    const tagName = (e.target as HTMLElement).tagName;

    console.log(`phase: ${eventPhase}, tag: ${tagName}`);
  }
}

const clickLogger = new ClickLogger();

console.log("----------");
export {};
