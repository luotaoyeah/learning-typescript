/**
 * Listing 8-2. Custom error
 */

class ApplicationError implements Error {
  public name: string = 'ApplicationError';
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

export { ApplicationError };

