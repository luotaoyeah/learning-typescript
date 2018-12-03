/*
 * Functions
 *     this
 *         this parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以在定义函数的时候，将函数的第一个参数定义为 this 参数，
   * this 参数是一个假的参数，只是用来检查类型，不会影响函数的实际运行；
   */

  function fn01(this: void, x: number, y: number) {
    console.log(x + y);
  }

  fn01(1, 2); // 3
}

console.log("\n-------------------------------------------------- 02");
{
  interface IPerson {
    name: string;

    create(this: IPerson): () => void;
  }

  const person: IPerson = {
    name: "tom",
    // 通过 this 参数，显式标注函数中的 this 的类型；
    create(this: IPerson) {
      return () => {
        console.log(this.name);
      };
    }
  };

  person.create()(); // tom
}

export {};
