/**
 * Listing 4-20. Reusable classes
 */

console.log("----------");

class Sings {
  public name: string = "tom";

  sing() {
    console.log("I am singing, my name is ", this.name);
  }
}

class Dances {
  public static message: string = "cat";

  dance() {
    console.log("I am dancing, message is ", Dances.message);
  }
}

class Acts {
  act() {
    console.log("I am acting");
  }
}

console.log("----------");
export { Sings, Dances, Acts };
