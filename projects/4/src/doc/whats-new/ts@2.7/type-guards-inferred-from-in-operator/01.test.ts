describe('src/doc/whats-new/ts@2.7/type-guards-inferred-from-in-operator', () => {
  it('should work 01', () => {
    /*
     * 可以正确推断 in 操作符判断出的类型
     */

    interface I01 {
      x: number;
    }

    interface I02 {
      x: string;
    }

    interface I03 {
      y: number;
    }

    interface I04 {
      y: string;
    }

    function f01(obj: I01 | I02 | I03 | I04) {
      if ('x' in obj) {
        // obj 的类型为 `I01 | I02`
        console.log(obj.x);
      } else {
        // obj 的类型为 `I03 | I04`
        console.log(obj.y);
      }
    }
  });
});
