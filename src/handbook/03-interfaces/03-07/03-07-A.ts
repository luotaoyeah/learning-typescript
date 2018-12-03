/*
 * Class Types
 */

/*
 * interface 的一个重要作用是：定义一组约定（contract），
 * 实现该 interface 的 class 必须满足这组约定；
 */
console.log("\n-------------------------------------------------- 01");

interface IClock {
  /* 可以定义属性 */
  currentTime: Date;

  /* 可以定义方法 */
  setTime(date: Date): void;
}

class Clock implements IClock {
  currentTime: Date;

  constructor(h: number, m: number) {}

  setTime(date: Date): void {
    this.currentTime = date;
  }
}

export {};
