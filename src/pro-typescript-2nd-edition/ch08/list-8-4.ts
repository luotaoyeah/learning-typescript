/**
 * Listing 8-4. Unconditional catch block
 */
import { ApplicationError } from './list-8-2';

class InputError extends ApplicationError {
  public name: string = 'InputError';
}

function test(n: number): number {
  if (n === 3) {
    throw new InputError('invalid number 3');
  }
  return n;
}

console.log(test(1)); // tslint:disable-line
console.log(test(2)); // tslint:disable-line
try {
  console.log(test(3)); // tslint:disable-line
} catch (e) {
  console.log('ignore some error'); // tslint:disable-line
}
console.log(test(4)); // tslint:disable-line

export {};
