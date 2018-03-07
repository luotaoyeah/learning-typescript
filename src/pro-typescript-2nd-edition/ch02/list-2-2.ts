/**
 * Listing 2-2. Nested and dotted hierarchies
 */

namespace FirstLevel {
  export namespace SecondLevel {
    export class Example {
      log() {
        console.log('FirstLevel.SecondLevel.Example.log()'); // tslint:disable-line
      }
    }
  }
}

namespace FirstLevel.SecondLevel.ThirdLevel {
  export class Example {
    log() {
      console.log('FirstLevel.SecondLevel.ThirdLevel.Example.log()'); // tslint:disable-line
    }
  }
}

const example01 = new FirstLevel.SecondLevel.Example();
example01.log();

const example02 = new FirstLevel.SecondLevel.ThirdLevel.Example();
example02.log();

export {};