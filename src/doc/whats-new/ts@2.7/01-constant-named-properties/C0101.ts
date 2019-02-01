/**
 * Constant-named properties
 */

console.log("\n-------------------------------------------------- 01");
{
  const KEY = Symbol("serialize-method-key");

  interface ISerializable {
    [KEY](name: string): void;
  }

  class MySerializable implements ISerializable {
    [KEY](name: string): void {
      console.log(name);
    }
  }

  new MySerializable()[KEY]("tom");
}

export {};
