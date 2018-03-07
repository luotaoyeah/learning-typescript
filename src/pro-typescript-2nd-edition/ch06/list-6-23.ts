/**
 * Listing 6-23. ProductDatabase supporting upgrades
 */
import { Product } from './list-6-21';

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class ProductDatabase {
  public name: string;
  public version: number;

  constructor(name: string, version: number) {
    this.name = name;
    this.version = version;
    const idbOpenDBRequest = indexedDB.open(name, version);
    idbOpenDBRequest.onupgradeneeded = this.upgrade;
  }

  upgrade(event: any): void {
    const db: IDBDatabase = event.target.result;
    const idbObjectStore = db.createObjectStore('products', { keyPath: 'id02' });
    idbObjectStore.createIndex('name', 'name', { unique: false });
    idbObjectStore.transaction.oncomplete = () => {
      const products = [
        new Product(1, 'AA'),
        new Product(2, 'BB'),
        new Product(3, 'CC')
      ];
      const idbTransaction = db.transaction('products', 'readwrite').objectStore('products');

      for (let product of products) {
        idbTransaction.add(product);
      }
    };
  }

  /**
   *
   * @param {number} id
   * @param {(result: Product) => void} callback
   */
  getProduct(id: number, callback: (result: Product) => void) {
    const idbOpenDBRequest = indexedDB.open(this.name, this.version);
    idbOpenDBRequest.onsuccess = () => {
      const db: IDBDatabase = idbOpenDBRequest.result;
      const idbObjectStore = db.transaction('products').objectStore('products');
      const query = idbObjectStore.get(id);
      query.onsuccess = () => {
        callback(query.result);
      };
    };
  }

  /**
   *
   * @param {Product} product
   */
  addProduct(product: Product): void {
    const idbOpenDBRequest = indexedDB.open(this.name, this.version);

    idbOpenDBRequest.onsuccess = () => {

      const db = idbOpenDBRequest.result;

      const idbObjectStore = db.transaction('products', 'readwrite').objectStore('products');

      idbObjectStore.add(product);
    };
  }

  /**
   *
   * @param {number} productId
   */
  deleteProduct(productId: number): void {
    const idbOpenDBRequest = indexedDB.open(this.name, this.version);

    idbOpenDBRequest.onsuccess = (e: Event) => {

      const db = idbOpenDBRequest.result;

      const idbObjectStore = db.transaction('products', 'readwrite').objectStore('products');

      const idbRequest = idbObjectStore.delete(productId);
      idbRequest.onsuccess = () => {
        console.log('delete success'); // tslint:disable-line
      };

      idbRequest.onerror = () => {
        console.log('delete error'); // tslint:disable-line
      };
    };
  }
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export { ProductDatabase };
