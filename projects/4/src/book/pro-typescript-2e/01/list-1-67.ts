/**
 * Listing 1-67. Interfaces
 */

interface IPerson {
  /* constructor */
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new (name: string): IPerson;

  /* property */
  name: string;

  /* method */
  run(): void;
}

export {};
