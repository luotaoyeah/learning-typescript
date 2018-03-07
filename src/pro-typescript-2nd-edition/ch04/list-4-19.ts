/**
 * Listing 4-19. Mixin enabler function
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor: any) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name: string) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {
  applyMixins
};