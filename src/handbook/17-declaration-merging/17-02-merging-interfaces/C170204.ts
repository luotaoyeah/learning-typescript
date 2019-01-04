/*
 * Declaration Merging
 *     Merging Interfaces
 *         function property
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 对于 function 类型的属性，如果它的某个参数是一个 string literal，
 * 则在合并之后，该属性会优先排在前面
 *
 * 即：在合并时，首先将所有的属性分成两类：第一类是参数类型为 string literal 的，第二类是其他的，
 * 然后先排第一类，按照同样的排列规则（后面的 interface 排在前面，interface 里面的顺序不变），
 * 然后再排第二类，按照同样的排列规则，且从第一类的最后面开始排列
 */

interface Document {
  createElement(tagName: any): Element;
}

interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}

interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}

/*
 * 合并之后的形式：
 * 为了演示效果，起了一个其他的 interface 名称（IDocument）
 */
interface IDocument {
  createElement(tagName: "canvas"): HTMLCanvasElement;
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}

export {};
