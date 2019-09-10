/* eslint-disable @typescript-eslint/no-namespace */
namespace C1403 {
  const GENDER_BOY = "BOY";

  export class Boy implements IPerson {
    constructor(public name: string) {}

    gender: string = GENDER_BOY;
  }
}
