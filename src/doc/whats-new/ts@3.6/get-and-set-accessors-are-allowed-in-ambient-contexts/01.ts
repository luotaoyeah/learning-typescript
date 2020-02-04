/*
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#get-and-set-accessors-are-allowed-in-ambient-contexts
 */

/*
 * 在 ambient 环境可以声明 getter 和 setter
 */

declare class C01 {
  get x(): number;
  set x(value: number);
}
