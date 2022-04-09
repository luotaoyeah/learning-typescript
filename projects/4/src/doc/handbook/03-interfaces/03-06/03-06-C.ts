/*
 * 跟 numeric index type 必须是 string index type 的子类型类似，
 * 其他属性的类型也必须是 string index type 的子类型；
 * 这是因为 JS 中访问属性有两种方式：obj.prop 和 obj["prop"]，
 * 即其他属性的定义，包含在了 string index type 的定义中；
 */
console.log("\n-------------------------------------------------- 01");

interface INumberDictionary {
  [index: string]: number;

  length: number;

  /*
    // TS2411: Property 'name' of type 'string' is not assignable to string index type 'number'.
    name: string;
  */
}

export {};
