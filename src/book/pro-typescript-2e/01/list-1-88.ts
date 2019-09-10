/**
 * Listing 1-88. Generic classes
 */

class DomainId<T> {
  constructor(private id: T) {}
}

class OrderId extends DomainId<number> {
  constructor(id: number) {
    super(id);
  }
}

class PersonId extends DomainId<string> {
  constructor(id: string) {
    super(id);
  }
}

function acceptPersonId(id: PersonId) {
  console.log(id);
}

function acceptDomainId(id: DomainId<any>) {
  console.log(id);
}

const personId = new PersonId("tom");
const orderId = new OrderId(18);

acceptDomainId(personId);
acceptDomainId(orderId);

acceptPersonId(personId);

/*
/!* TS2345: Argument of type 'OrderId' is not assignable to parameter of type 'PersonId'. *!/
acceptPersonId(orderId);
*/

export {};
