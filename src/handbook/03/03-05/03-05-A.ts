/*
 * Function Types
 */

/*
 * interface 不仅可以用来描述一个 object 类型，
 * 还可以用来描述一个 function 类型，
 * 此时 interface 中是一个函数签名，只有参数列表和返回类型，没有函数体；
 */
console.log("\n-------------------------------------------------- 01");

interface ISearchFn {
  (source: string, subString: string): boolean;
}

/*
 * function 类型在检查类型时，主要检查参数列表的类型和返回类型，
 * 其中，参数名称不影响检查结果，主要是参数的顺序以及其对应的类型；
 */
const searchFn: ISearchFn = (src: string, sub: string): boolean => {
  return src.search(sub) > -1;
};

/* true */
console.log(searchFn("foo", "o"));

export {};
