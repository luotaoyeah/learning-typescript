/*
 * Type Inference
 *     Contextual Type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * TS 可以根据上下文环境来推断类型；
   */

  const obj: { onClick: (e: MouseEvent) => void } = {
    onClick: e => {
      // 参数 e 使用了 contextual type 类型推断
      /*
            console.log(e.button02); // TS2551: Property 'button02' does not exist on type 'MouseEvent'. Did you mean 'button'?
      */
    }
  };
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果显式地标注了类型，则 contextual type 会被忽略；
   */

  const obj: { onClick: (e: MouseEvent) => void } = {
    // 参数 e 被显式地标注为 any 类型
    onClick: (e: any) => {
      console.log(e.button02);
    }
  };
}
