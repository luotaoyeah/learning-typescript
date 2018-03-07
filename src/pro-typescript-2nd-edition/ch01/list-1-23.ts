/**
 * Listing 1-23. Mapped types
 */

interface IPerson {
  name: string;
  age: number;
}

/* Mapped types */
type Readonly<T> = {
  readonly [K in keyof T] :T[K];
  };

type Optional<T> = {
  [K in keyof T]?:T[K];
  };

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
  };

type ReadonlyPerson = Readonly<IPerson>;
type OptionalPerson = Optional<IPerson>;
type NullablePerson = Nullable<IPerson>;

export {};