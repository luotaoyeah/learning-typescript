/**
 * Listing 3-12. Compatible types
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class C1 {
  name: string;

  show(x?: string) {
    return 2;
  }
}

class C2 {
  constructor(public name: string) {}

  show(x: string = "tom") {
    return 2;
  }
}

class C3 {
  name: string;

  show() {
    return "tom" as any;
  }
}

const array: C1[] = [
  new C1(),
  new C2("tom"),
  new C3(),
  {
    name: "cat",
    show() {
      return 3;
    }
  }
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i].show()); // tslint:disable-line;
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
