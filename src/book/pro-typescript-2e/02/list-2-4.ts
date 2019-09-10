/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Listing 2-4. Import alias
 */

namespace ANS {
  export class A {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }
}

namespace BNS {
  /* use import to alias an item from another namespace */
  import A = ANS.A;

  export class B {
    as: Array<A> = [];

    constructor(as: Array<A>) {
      this.as = as;
    }
  }
}

const b = new BNS.B([new ANS.A("tom"), new ANS.A("cat")]);

console.log(b.as);

export {};
