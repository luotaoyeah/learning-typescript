/**
 * Listing 8-9. Calculating lines of communication
 */

class CommunicationLine {
  calculate(size: number): number {
    return (size * (size - 1)) / 2;
  }
}

function test() {
  const communicationLine = new CommunicationLine();

  const result01 = communicationLine.calculate(4);

  if (result01 !== 6) {
    throw new Error('error for 4');
  }

  const result02 = communicationLine.calculate(10);

  if (result02 !== 45) {
    throw new Error('error for 10');
  }
}

test();

export {};
