/**
 * Listing 1-67. Interfaces
 */

interface IPerson {
  /* constructor */
  new (name: string): IPerson;

  /* property */
  name: string;

  /* method */
  run(): void;
}

export {};