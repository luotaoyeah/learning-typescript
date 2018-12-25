/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.match
 *         Symbol.replace
 *         Symbol.search
 *         Symbol.split
 *
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * [Symbol.match] 方法，
   * 存在于正则表达式实例对象上，
   * 当调用 String.prototype.match() 方法时，该方法会被调用
   */

  RegExp.prototype[Symbol.match] = new Proxy(RegExp.prototype[Symbol.match], {
    apply(target: any, thisArg: any, argArray?: any): any {
      console.log(target.name); // [Symbol.match]
      return target.apply(thisArg, argArray);
    }
  });

  console.log("FOO".match(/O/g)); // [ 'O', 'O' ]
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * [Symbol.replace] 方法，
   * 存在于正则表达式实例对象上，
   * 当调用 String.prototpye.replace() 方法时，该方法会被调用
   */

  RegExp.prototype[Symbol.replace] = new Proxy(
    RegExp.prototype[Symbol.replace],
    {
      apply(target: any, thisArg: any, argArray?: any): any {
        console.log(target.name); // [Symbol.replace]
        return target.apply(thisArg, argArray);
      }
    }
  );

  console.log("FOO".replace(/O/g, "X")); // FXX
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * [Symbol.search] 方法，
   * 存在于正则表达式实例对象上，
   * 当调用 String.prototype.search() 方法时，该方法会被调用
   */

  RegExp.prototype[Symbol.search] = new Proxy(RegExp.prototype[Symbol.search], {
    apply(target: any, thisArg: any, argArray?: any): any {
      console.log(target.name); // [Symbol.search]
      return target.apply(thisArg, argArray);
    }
  });

  console.log("FOO".search(/O/)); // 1
}

console.log("\n-------------------------------------------------- 04");
{
  /*
   * [Symbol.split] 方法，
   * 存在于正则表达式实例对象上，
   * 当调用 String.prototype.split() 方法时，该方法会被调用
   */

  RegExp.prototype[Symbol.split] = new Proxy(RegExp.prototype[Symbol.split], {
    apply(target: any, thisArg: any, argArray?: any): any {
      console.log(target.name); // [Symbol.split]
      return target.apply(thisArg, argArray);
    }
  });

  console.log("F,O,O".split(/,/)); // [ 'F', 'O', 'O' ]
}

export {};
