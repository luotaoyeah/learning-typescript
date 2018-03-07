/**
 * Listing 3-2. Using and avoiding equivalence
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

type DomainId<T extends string> = {
  type: T,
  value: number
};

type CustomerId = DomainId<'CustomerId'>;
type ProductId = DomainId<'ProductId'>;

const getCustomerId = (value: number): CustomerId => ({
  type: 'CustomerId',
  value
});

const getProductId = (value: number) => ({
  type: 'ProductId',
  value
});

const customerId = getCustomerId(1);
const productId = getProductId(2);

class Example {
  static avoidAccidentalEquivallence(id: CustomerId) {
    console.log('type:', typeof id); // tslint:disable-line
  }

  static useEquivallence(id: number) {
    console.log('type:', typeof id); // tslint:disable-line
  }
}

Example.avoidAccidentalEquivallence(customerId);

/*
/!* TS2345: Argument of type '{ type: string; value: number; }' is not assignable to parameter of type 'DomainId<"CustomerId">'. *!/
Example.avoidAccidentalEquivallence(productId);
*/

Example.useEquivallence(customerId.value);
Example.useEquivallence(productId.value);

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {};