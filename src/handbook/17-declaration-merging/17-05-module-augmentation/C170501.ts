/*
 * Declaration Merging
 *     Module Augmentation
 */

console.log("\n-------------------------------------------------- 01");
/*
 * module 不能直接进行合并，
 * 通常的做法是使用模块增强（module augmentation），
 * 即，将要增强的模块引入，然后添加新的功能，再重新输出
 *
 * 这种方式的一个问题是：
 *     TS 编译器无法感知到新添加的功能的类型信息
 * 我们需要在新的模块中，手动添加新功能的类型信息
 */

import { C } from "./C17050101";

/*
 * 这儿的模块名称，跟 import 语句中的模块地址必须相同
 */
declare module "./C17050101" {
  interface C {
    fn02(): void;
  }
}

C.prototype.fn02 = function() {
  console.log("FN02");
};

export { C };
