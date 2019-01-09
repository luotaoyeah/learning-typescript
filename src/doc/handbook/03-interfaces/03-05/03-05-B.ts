/*
 * TS 可以根据上下文，推断出参数类型和返回类型；
 */
console.log("\n-------------------------------------------------- 01");

interface ISearchFn {
  (source: string, subString: string): boolean;
}

const searchFn02: ISearchFn = function(src, sub) {
  return src.search(sub) > -1;
};

console.log(searchFn02("bar", "r"));

export {};
