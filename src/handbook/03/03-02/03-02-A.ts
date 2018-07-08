/*
 * optional properties
 */

/*
 * 在属性名之后跟一个 ?，表示该属性是可选的；
 */

console.log("\n-------------------------------------------------- 01");

interface ISquareConfig {
  color?: string;
  width?: number;
}

/**
 *
 * @param config
 */
function createSquare(config: ISquareConfig): { color: string; area: number } {
  const square = { color: "white", area: 100 };

  if (config.color) {
    square.color = config.color;
  }

  if (config.width) {
    square.area = config.width * config.width;
  }

  return square;
}

/* { color: 'red', area: 100 } */
console.log(createSquare({ color: "red" }));
/* { color: 'white', area: 400 } */
console.log(createSquare({ width: 20 }));

export {};
