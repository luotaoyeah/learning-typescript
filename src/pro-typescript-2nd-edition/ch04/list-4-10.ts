/**
 * Listing 4-10. Segregated interfaces
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class Document {
  public name: string;
}

interface Printer {
  print(doc: Document): string;
}

interface Stapler {
  staple(doc: Document): void;
}

interface Copier {
  copy(src: Document, dest: Document): boolean;
}

class SimplePrinter implements Printer {
  print(doc: Document): string {
    return doc.name;
  }
}

class SuperPrinter implements Printer, Stapler, Copier {
  print(doc: Document): string {
    return doc.name;
  }

  staple(doc: Document): void {
  }

  copy(src: Document, dest: Document): boolean {
    return false;
  }
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};