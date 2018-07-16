/*
 *
 */
console.log("\n-------------------------------------------------- 01");

interface ISquareConfig {
  width?: number;
  color?: string;
}

/**
 *
 * @param config
 */
function createSquare(config: ISquareConfig): { color: string; area: number } {
  const defaultConfig = { color: "red", width: 100 };

  if (config.width) {
    defaultConfig.width = config.width;
  }
  if (config.color) {
    defaultConfig.color = config.color;
  }

  return {
    color: defaultConfig.color,
    area: defaultConfig.width * defaultConfig.width
  };
}

/*
 * 解决 excess property check error 的方法之一：使用 type assertion；
 */
createSquare({ width: 100, color02: "red" } as ISquareConfig);

/*
 * 通常情况，出现 excess property check error 时，
 * 多半是因为类型定义不准确，需要修改类型定义；
 * 比如对于上面这种情况，可以修改 ISquareConfig 的定义；
 */

interface ISquareConfig02 {
  width?: number;
  color?: string;

  /*
   * index signature
   * 表示可以拥有任意的其他属性，属性名称的类型为 string，属性值可以是任意类型；
   */
  [key: string]: any;
}

export {};
