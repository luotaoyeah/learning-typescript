/**
 * Listing 6-24. Instantiating a ProductDatabase
 */
import { ProductDatabase } from './list-6-23';

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
const version = 1;
const productDatabase = new ProductDatabase('db-test', version);

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};
