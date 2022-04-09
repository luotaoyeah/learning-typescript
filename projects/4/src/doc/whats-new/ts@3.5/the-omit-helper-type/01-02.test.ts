import { IPerson } from "./01-01";

describe("src/doc/whats-new/ts@3.5/01-the-omit-helper-type/01-02.ts", () => {
  it("should work", () => {
    /*
     * ts@3.5 新增了一个 `Omit` 类型, 用来实现同样的效果,
     * `Omit` 内部就是使用的 `Pick` + `Exclude` 来实现的, 用法如下:
     */

    type IPerson02 = Omit<IPerson, "location">;
    const person: IPerson02 = { name: "x", age: 9 };
    expect(person.name).toEqual("x");
    expect(person.age).toEqual(9);
  });
});
