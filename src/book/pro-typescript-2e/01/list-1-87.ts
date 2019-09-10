/**
 * Listing 1-87. Generic interfaces
 */

class Person {
  id: string;
  name: string;
}

interface Repository<T, TID> {
  get(id: TID): T;

  persist(model: T): TID;
}

class PersonRepository implements Repository<Person, string> {
  constructor(private persons: Array<Person>) {}

  get(id: string): Person {
    return this.persons[id];
  }

  persist(person: Person): string {
    this.persons[person.id] = person;
    return person.id;
  }
}

export {};
