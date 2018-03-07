/**
 * Listing 4-8. Error classes
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class ApplicationError extends Error {
  private errorCode: string;

  constructor(message: string, errorCode: string) {
    super(message);
    this.errorCode = errorCode;
  }
}

if (Math.random() > 0.5) {
  throw new ApplicationError('An error has occurred', 'CODE-001');
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};