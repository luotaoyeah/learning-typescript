/**
 * Listing 1-63. Preserving scope with arrow syntax
 */

const loseScopeExample = {
  name: "tom",
  hello() {
    setTimeout(function(this: any) {
      /* 'name: ' */
      console.log("name:", this.name); // tslint:disable-line
      /* this refers to Window */
      console.log("this", this); // tslint:disable-line
    }, 1000);
  }
};

loseScopeExample.hello();

const preserveScopeExample = {
  name: "cat",
  hello() {
    setTimeout(() => {
      /* 'name: cat' */
      console.log("name:", this.name); // tslint:disable-line
      console.log("this", this); // tslint:disable-line
    }, 1000);
  }
};

preserveScopeExample.hello();

export {};
