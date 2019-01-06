/**
 * Listing 4-9. Printer interface
 */

console.log("----------");

class Document {}

interface Printer {
  copy(src: Document, dest: Document): boolean;

  print(doc: Document): string;
}

console.log("----------");
export {};
