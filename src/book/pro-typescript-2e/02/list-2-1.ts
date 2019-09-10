/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Listing 2-1. Namespaces
 */

namespace FirstNamespace {
  export class Example {
    log() {
      console.log("FirstNamespace.Example.log()");
    }
  }
}

namespace SecondNamespace {
  export class Example {
    log() {
      console.log("SecondNamespaace.Example.log()"); // eslint-disable-line
    }
  }
}

const firstExample = new FirstNamespace.Example();

/* 'FirstNamespace.Example.log()' */
firstExample.log();

const secondExample = new SecondNamespace.Example();

/* 'SecondNamespaace.Example.log()' */
secondExample.log();

export {};
