/**
 * Listing 1-22. Manual type variations
 */

interface IPerson {
  name: string;
  age: number;
}

interface ManualReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

interface ManualOptionalPerson {
  name?: string;
  age?: number;
}

interface ManualNullablePerson {
  name: string | null;
  age: number | null;
}

export {};