/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-do-my-derived-class-property-initializers-overwrite-values-set-in-the-base-class-constructor
 */

/*
 * Q:
 */
class Base {
  public myVar: string = "Base";

  constructor() {
    console.log(this.myVar);
  }
}

class Child extends Base {
  public myVar: string = "Child";
}

const base = new Base(); // 'Base'
const child = new Child(); // 'Base'

/**
 * A: transform the filed initialization to a constructor parameter
 */

class Base02 {
  public myVar: string;

  constructor(myVar: string = "Base") {
    this.myVar = myVar;
    console.log(this.myVar);
  }
}

class Child02 extends Base02 {
  constructor() {
    super("Child");
  }
}

const base02 = new Base02();
const child02 = new Child02();

export {};
