/*
 * Array
 */

/*
 * array 支持两种写法:
 *     使用 ElementType[] 的形式；
 *     使用 Array<ElementType> 的形式；
 */

console.log("\n-------------------------------------------------- 01");

const array01: number[] = [1, 2, 3];
const array02: Array<number> = [1, 2, 3];

/* [ 1, 2, 3 ] */
console.log(array01);
/* [ 1, 2, 3 ] */
console.log(array02);

export {};
