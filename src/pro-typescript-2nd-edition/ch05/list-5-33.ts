/**
 * Listing 5-33. Custom events
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

enum EventType {
  MyCustomEvent
}

class Trigger {
  static customEvent(name: string, detail: {}) {
    const e = new CustomEvent(name, detail);
    document.dispatchEvent(e);
  }
}

class Listener {

  constructor() {
    document.addEventListener(EventType[EventType.MyCustomEvent], this.listener, false);
  }

  listener(e: Event) {
    console.log('event type:', EventType[EventType.MyCustomEvent]); // tslint:disable-line
    console.log('event detaill:', (e as any).detail); // tslint:disable-line
  }
}

const listener = new Listener();

Trigger.customEvent(EventType[EventType.MyCustomEvent], {
  detail: {
    name: 'tom',
    age: 18
  }
});

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};