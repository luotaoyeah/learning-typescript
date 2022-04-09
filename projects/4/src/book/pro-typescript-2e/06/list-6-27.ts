/**
 * Listing 6-27. Calling getProduct
 */
import { ProductDatabase } from "./list-6-23";
import { addEvent } from "./list-6-11";
import { Product } from "./list-6-21";

console.log("----------");
const version = 1;
const productDatabase = new ProductDatabase("db-test", version);

addEvent(document.getElementById("productId")!, "keyup", function(
  this: HTMLInputElement
) {
  const productId: number = +this.value;
  if (productId > 0) {
    productDatabase.getProduct(productId, (product: Product) => {
      document.getElementById("content")!.innerHTML = JSON.stringify(product);
    });
  }
});

let id = 4;
addEvent(document.getElementById("btnAddProduct")!, "click", function(
  this: HTMLButtonElement
) {
  productDatabase.addProduct(new Product(id++, "DD"));
});

addEvent(document.getElementById("btnDeleteProduct")!, "click", function(
  this: HTMLButtonElement
) {
  const productId: number = +(document.getElementById(
    "productId"
  )! as HTMLInputElement).value;
  debugger; // eslint-disable-line
  if (productId > 0) {
    productDatabase.deleteProduct(productId);
  }
});

console.log("----------");
export {};
