/**
 * Listing 8-12. Running the performance test with exceptions
 */
import { Performance } from "./list-8-10";

class CommunicationLine {
  calculate(size: number) {
    return size * (size - 1) / 2;
  }
}

function test() {
  const communicationLine = new CommunicationLine();

  const result01 = communicationLine.calculate(4);

  if (result01 !== 7) {
    throw new Error("invalid result for 4");
  }

  const result02 = communicationLine.calculate(10);
  if (result02 !== 45) {
    throw new Error("invalid result for 10");
  }
}

const result = Performance.run(test, 10000);
console.log(`${result.time} ms`); // tslint:disable-line

export {};
