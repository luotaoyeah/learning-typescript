/*
 * Decorators
 *     Metadata
 */

import "reflect-metadata";

console.log("\n-------------------------------------------------- 01");

/*
 * decorator metadata 是一个试验性质的 API
 * 需要通过 --emitDecoratorMetadata 配置启用
 * 需要引入第三方包 reflect-metadata 来实现相关功能
 */

class P {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function validate<T>(
  ctor: any,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) {
  if (descriptor.set) {
    descriptor.set = new Proxy(descriptor.set, {
      apply(target: (v: T) => void, thisArg: any, argArray: [T]): any {
        const T = Reflect.getMetadata("type", ctor, key);
        if (!(argArray[0] instanceof T)) {
          throw new Error("类型错误");
        }

        return target.apply(thisArg, argArray);
      }
    });
  }
}

class C {
  private _p: P;

  get p() {
    return this._p;
  }

  @validate
  @Reflect.metadata("type", P)
  set p(value: P) {
    this._p = value;
  }
}

const c = new C();
/*
  c.p = { x: 9, y: 9 }; // Error: 类型错误
*/
c.p = new P(9, 9); // P { x: 9, y: 9 }
console.log(c.p);

export {};
