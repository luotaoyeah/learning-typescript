/**
 * Listing 4-20. Reusable classes
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class Sings {
  public name: string = "tom";

  sing() {
    console.log("I am singing, my name is ", this.name); // tslint:disable-line
  }
}

class Dances {
  public static message: string = "cat";

  dance() {
    console.log("I am dancing, message is ", Dances.message); // tslint:disable-line
  }
}

class Acts {
  act() {
    console.log("I am acting"); // tslint:disable-line
  }
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export { Sings, Dances, Acts };
