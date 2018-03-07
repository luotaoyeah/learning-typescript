/**
 * Listing 10-3. Jest test in FizzBuzz.test.ts
 */
import { FizzBuzz } from "./FizzBuzz";

describe("A FizzBuzz generator", () => {
  let fizzBuzz: FizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  it("should return number 1 when 1 is played", () => {
    const result = fizzBuzz.generate(1);
    expect(result).toBe(1);
  });

  it("should return number 2 when 2 is played", () => {
    const result = fizzBuzz.generate(2);
    expect(result).toBe(2);
  });

  it("should return 'fizz' when 3 is played", () => {
    const result = fizzBuzz.generate(3);
    expect(result).toBe("fizz");
  });

  it("should return 'fizzbuzz' when 15 is played", () => {
    const result = fizzBuzz.generate(15);
    expect(result).toBe("fizzbuzz");
  });

  it("should return 'fizzbuzz' when 30 is played", () => {
    const result = fizzBuzz.generate(30);
    expect(result).toBe("fizzbuzz");
  });
});
