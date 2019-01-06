/**
 * Listing 5-13. Simple observer
 */

console.log("----------");

interface Subscriber {
  (message: string): void;
}

class Publisher {
  subscribers: Subscriber[] = [];

  addSubscriber(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  notify(message: string) {
    for (let subscriber of this.subscribers) {
      subscriber(message);
    }
  }
}

const publisher = new Publisher();

publisher.addSubscriber((message: string) => {
  console.log("A:", message);
});

publisher.addSubscriber((message: string) => {
  console.log("B:", message);
});

publisher.addSubscriber((message: string) => {
  console.log("C:", message);
});

publisher.notify("tom");

console.log("----------");
export {};
