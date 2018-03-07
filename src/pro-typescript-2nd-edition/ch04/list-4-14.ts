/**
 * Listing 4-14. Body cleaning
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

interface BodyCleaning {
  cleanBody(): void;
}

class BasicBodyCleaning implements BodyCleaning {
  cleanBody(): void {
    console.log('clean body 01'); // tslint:disable-line
    console.log('clean body 02'); // tslint:disable-line
  }
}

class ExecutiveBodyCleaning extends BasicBodyCleaning {
  cleanBody(): void {
    super.cleanBody();
    console.log('clean body 03'); // tslint:disable-line
    console.log('clean body 04'); // tslint:disable-line
  }
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {
  BodyCleaning,
  BasicBodyCleaning,
  ExecutiveBodyCleaning
};