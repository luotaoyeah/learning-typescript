/**
 * Listing 10-2. FizzBuzz code in FizzBuzz.ts
 */

class FizzBuzz {
  generate(input: number): number | string {
    let output: string = '';

    if (input % 3 === 0) {
      output += 'fizz';
    }

    if (input % 5 === 0) {
      output += 'buzz';
    }

    return output || input;
  }
}

export { FizzBuzz };

