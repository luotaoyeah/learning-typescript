/**
 * Listing 1-63. Preserving scope with arrow syntax
 */

const loseScopeExample = {
  name: "tom",
  hello() {
    setTimeout(function(this: any) {
      /* 'name: ' */
      console.log("name:", this.name);
      /* this refers to Window */
      console.log("this", this);
    }, 1000);
  }
};

loseScopeExample.hello();

const preserveScopeExample = {
  name: "cat",
  hello() {
    setTimeout(() => {
      /* 'name: cat' */
      console.log("name:", this.name);
      console.log("this", this);
    }, 1000);
  }
};

preserveScopeExample.hello();

export {};
