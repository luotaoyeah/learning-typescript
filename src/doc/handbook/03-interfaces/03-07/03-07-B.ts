/*
 * class 拥有两种类型：static side 和 instance side；
 */
console.log("\n-------------------------------------------------- 01");

/*
 * 如果一个 interface 定义为 construct signature，
 * 那么这个 interface 不能被 class 实现；
 * 因为 constructor 属于 class 的 static side，
 * 而 class 在实现一个 interface 的时候，检查的是这个 calss 的 instance side；
 */
interface IClockConstructor {
  new (h: number, m: number): any;
}

/*
  /!*
   * TS2420: Class 'Clock' incorrectly implements interface 'IClockConstructor'.
   * Type 'Clock' provides no match for the signature 'new (h: number, m: number): any'.
   *!/
  class Clock implements IClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) {}
  }
*/

/*
 * 为了解决这个问题，需要手动检查 class 的 static side；
 */
console.log("\n-------------------------------------------------- 02");
interface IClockConstructor02 {
  new (h: number, m: number): IClock;
}

interface IClock {
  tick(): void;
}

/*
 * 将参数 Ctor 的类型指定为 IClockConstructor02，这样在调用该方法的时候，
 * TS 就会检查参数是否满足 IClockConstructor02，从而实现手动检查 class 的 static side；
 */
function createClock(Ctor: IClockConstructor02, h: number, m: number): IClock {
  return new Ctor(h, m);
}

class DigitalClock implements IClock {
  constructor(h: number, m: number) {}

  tick(): void {
    console.log("beep");
  }
}

class AnalogClock implements IClock {
  constructor(h: number, m: number) {}

  tick(): void {
    console.log("tick");
  }
}

const click01: DigitalClock = createClock(DigitalClock, 12, 12);
const clock02: AnalogClock = createClock(AnalogClock, 12, 12);

export {};
