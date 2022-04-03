/**
 * Listing 4-14. Body cleaning
 */

console.log("----------");

interface BodyCleaning {
  cleanBody(): void;
}

class BasicBodyCleaning implements BodyCleaning {
  cleanBody(): void {
    console.log("clean body 01");
    console.log("clean body 02");
  }
}

class ExecutiveBodyCleaning extends BasicBodyCleaning {
  cleanBody(): void {
    super.cleanBody();
    console.log("clean body 03");
    console.log("clean body 04");
  }
}

console.log("----------");
export { BodyCleaning, BasicBodyCleaning, ExecutiveBodyCleaning };
