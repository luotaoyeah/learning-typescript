/**
 * Listing 3-3. TypeScript ordered array class
 */

console.log("----------");

class OrderArray<T> {
  private items: Array<T> = [];

  constructor(private comparer?: (x: T, y: T) => number) {}

  add(item: T) {
    this.items.push(item);
    this.items.sort(this.comparer);
  }

  getItem(index: number): T | null {
    if (this.items.length > index) {
      return this.items[index];
    }
    return null;
  }
}

const orderArray = new OrderArray<number>();

orderArray.add(5);
orderArray.add(1);
orderArray.add(2);

console.log(orderArray.getItem(1));

console.log("----------");
export {};
