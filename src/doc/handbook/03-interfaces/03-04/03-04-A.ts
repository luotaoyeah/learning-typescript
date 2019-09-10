/*
 * Excess Property Checks
 */

/*
 * 在进行类型检查时，普通变量和对象字面量的结果是不一样的；
 *     对于普通变量，如果它比目标类型多了某些属性，不会报错，
 *     对于对象字面量，如果它比目标类型多了某些属性，会报错；
 * 这种机制称之为 excess property check；
 */
console.log("\n-------------------------------------------------- 01");

interface ISquareConfig {
  width?: number;
  color?: string;
}

/**
 *
 * @param cfg
 */
function createSquare(cfg: ISquareConfig): { color: string; area: number } {
  const defaultConfig = { color: "red", width: 100 };

  if (cfg.width) {
    defaultConfig.width = cfg.width;
  }
  if (cfg.color) {
    defaultConfig.color = cfg.color;
  }

  return {
    color: defaultConfig.color,
    area: defaultConfig.width * defaultConfig.width
  };
}

const config = { width: 100, color02: "red" };

/*
 * 此处，对象 config 比目标类型（ISquareConfig）多了一个属性 color02，
 * 但是不会报错；
 */
createSquare(config);

/*
  /!*
   * TS2345: Argument of type '{ width: number; color02: string; }' is not assignable to parameter of type 'ISquareConfig'.
   * Object literal may only specify known properties, but 'color02' does not exist in type 'ISquareConfig'. Did you mean to write 'color'?
   *!/
  createSquare({ width: 100, color02: "red" });
*/

export {};
