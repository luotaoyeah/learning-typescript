/*
 * Decorators
 *     Decorator Evaluation
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 在一个 class 中，不同类型的 decorator 的解析顺序如下：
 *     实例成员：
 *         1. 实例属性
 *         2. 实例访问器
 *         3. 实例方法参数
 *         4. 实例方法
 *     静态成员：
 *         5. 静态属性
 *         6. 静态访问器
 *         7. 静态方法参数
 *         8. 静态方法
 *     构造函数：
 *         9. 构造函数参数
 *     类：
 *         10. 类
 */

// INSTANCE PROPERTY
// INSTANCE ACCESSOR
// INSTANCE METHOD PARAM
// INSTANCE METHOD
// STATIC PROPERTY
// STATIC ACCESSOR
// STATIC METHOD PARAM
// STATIC METHOD
// CONSTRUCTOR PARAM
// CLASS
@D01()
class C {
  constructor(@D02() x: string) {
    this.x = x;
  }

  @D03()
  x: string = "x";

  @D04()
  get y() {
    return "y";
  }

  @D05()
  fn01(@D06() x: string) {}

  @D07()
  static X: string = "X";

  @D08()
  static get Y() {
    return "Y";
  }

  @D09()
  static fn01(@D010() x: string) {}
}

function D01() {
  return function(x: any) {
    console.log("CLASS");
  };
}

function D02() {
  return function(x: any, y: any, z: any) {
    console.log("CONSTRUCTOR PARAM");
  };
}

function D03() {
  return function(x: any, y: any) {
    console.log("INSTANCE PROPERTY");
  };
}

function D04() {
  return function(x: any, y: any) {
    console.log("INSTANCE ACCESSOR");
  };
}

function D05() {
  return function(x: any, y: any) {
    console.log("INSTANCE METHOD");
  };
}

function D06() {
  return function(x: any, y: any, z: any) {
    console.log("INSTANCE METHOD PARAM");
  };
}

function D07() {
  return function(x: any, y: any) {
    console.log("STATIC PROPERTY");
  };
}

function D08() {
  return function(x: any, y: any) {
    console.log("STATIC ACCESSOR");
  };
}

function D09() {
  return function(x: any, y: any) {
    console.log("STATIC METHOD");
  };
}

function D010() {
  return function(x: any, y: any, z: any) {
    console.log("STATIC METHOD PARAM");
  };
}

export {};
