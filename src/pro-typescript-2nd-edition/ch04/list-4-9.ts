/**
 * Listing 4-9. Printer interface
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class Document {

}

interface Printer {
  copy(src: Document, dest: Document): boolean;

  print(doc: Document): string;
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};