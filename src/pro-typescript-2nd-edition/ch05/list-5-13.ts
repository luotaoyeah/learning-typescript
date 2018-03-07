/**
 * Listing 5-13. Simple observer
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

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
  console.log("A:", message); // tslint:disable-line
});

publisher.addSubscriber((message: string) => {
  console.log("B:", message); // tslint:disable-line
});

publisher.addSubscriber((message: string) => {
  console.log("C:", message); // tslint:disable-line
});

publisher.notify("tom");

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
