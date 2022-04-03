/**
 * Listing 4-19. Mixin enabler function
 */

console.log("----------");

function applyMixins(derivedCtor: any, baseCtors: Array<any>) {
  baseCtors.forEach((baseCtor: any) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name: string) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

console.log("----------");
export { applyMixins };
