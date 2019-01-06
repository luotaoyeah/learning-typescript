/*
 * Decorators
 *     Decorator Factories
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 装饰器工厂方法（decorator factory）是一个特殊的 function
 * 它返回的就是一个真正的 decorator function
 */

/*
 * 工厂方法可以接收参数
 */
function dec01Factory(config: object) {
  return function(Ctor: Function) {
    console.log(config); // { foo: true }
    console.log(Ctor.name); // C
  };
}

/*
 * decorator factory 在使用的时候，必须加上括号，
 * 表示它的返回值才是真正的 decorator
 * 此时可以通过参数，对返回的 decorator 进行配置
 */
@dec01Factory({ foo: true })
class C {}

export {};
