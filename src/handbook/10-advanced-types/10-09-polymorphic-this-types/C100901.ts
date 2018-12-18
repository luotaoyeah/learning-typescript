/*
 * Advanced Types
 *     Polymorphic this types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 多态的 this 类型（polymorphic this type）是一种特殊的类型，使用 this 表示，
   * 通常用作方法的返回类型
   *
   * 多态的 this 类型的特殊之处在于：
   *     如果父类的某个方法的返回类型为 this 类型，
   *     则在父类中，该方法的返回类型为父类，
   *     而在子类中，该方法的返回类型为子类
   *
   * 简而言之：
   *     当方法的返回类型为 this 时，表示方法的返回类型为该方法当前所在的类
   */

  class BasicCalculator {
    public constructor(protected value: number) {}

    currentValue(): number {
      return this.value;
    }

    add(x: number): this {
      this.value += x;
      return this;
    }

    multiply(x: number): this {
      this.value *= x;
      return this;
    }
  }

  console.log(
    new BasicCalculator(1)
      .add(2)
      .multiply(3)
      .currentValue()
  ); // 9

  class ScientificCalculator extends BasicCalculator {
    sin(): this {
      this.value = Math.sin(this.value);
      return this;
    }
  }

  console.log(
    new ScientificCalculator(1)
      .add(2)
      .sin()
      .multiply(3)
      .currentValue()
  ); // 0.4233600241796016
}

export {};
