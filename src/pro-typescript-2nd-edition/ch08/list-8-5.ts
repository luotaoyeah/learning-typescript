/**
 * Listing 8-5. Checking the type of error
 */
import { ApplicationError } from './list-8-2';

class InputError extends ApplicationError {
  public name: string = 'InputError';
}

class OtherError extends ApplicationError {
}

function test(n: number): number {
  if (n === 2) {
    throw new OtherError('invalid number 2');
  }
  if (n === 3) {
    throw new InputError('invalid number 3');
  }
  return n;
}

console.log(test(1)); // tslint:disable-line
try {
  console.log(test(2)); // tslint:disable-line
  console.log(test(3)); // tslint:disable-line
} catch (e) {
  if (e instanceof ApplicationError) {
    console.log('ignore some error'); // tslint:disable-line
  } else {
    throw e;
  }
}
console.log(test(4)); // tslint:disable-line

export {};
