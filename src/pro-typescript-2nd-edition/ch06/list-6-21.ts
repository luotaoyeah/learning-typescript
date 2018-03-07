/**
 * Listing 6-21. Product.ts
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class Product {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export { Product };
