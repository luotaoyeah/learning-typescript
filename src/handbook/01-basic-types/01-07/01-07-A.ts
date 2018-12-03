/*
 * Enum
 */

/*
 * enum 类型可以看做是：表示一组数字，给每个数字取了一个别名；
 */

console.log("\n-------------------------------------------------- 01");

/**
 * 颜色
 */
enum ColorEnum {
  RED,
  GREEN,
  BLUE
}

/* 2 */
console.log(ColorEnum.BLUE);

const color: ColorEnum = ColorEnum.RED;
/* 0 */
console.log(color);

export {};
