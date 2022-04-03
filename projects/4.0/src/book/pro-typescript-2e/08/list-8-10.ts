/**
 * Listing 8-10. Performance.ts runner
 */

class Performance {
  private fn: Function;
  private iterations: number;

  constructor(fn: Function, iterations: number) {
    this.fn = fn;
    this.iterations = iterations;
  }

  /**
   *
   */
  private test() {
    const errors: Array<number> = [];

    const startTime = performance.now();

    for (let i = 0; i < this.iterations; i++) {
      try {
        this.fn();
      } catch (e) {
        if (errors.length < 10) {
          errors.push(i);
        }
      }
    }

    const time = performance.now() - startTime;

    return {
      errors,
      time,
      avgTime: time / this.iterations
    };
  }

  /**
   *
   * @param {Function} fn
   * @param {number} iterations
   */
  static run(fn: Function, iterations: number) {
    const performance2 = new Performance(fn, iterations);
    return performance2.test();
  }
}

export { Performance };
