/* eslint-disable @typescript-eslint/no-namespace */
namespace C1403 {
  const GENDER_GIRL = "GIRL";

  export class Girl implements IPerson {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    gender: string = GENDER_GIRL;
  }
}
