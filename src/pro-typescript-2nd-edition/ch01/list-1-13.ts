/**
 * Listing 1-13. Constant enumeration
 */

const enum VehicleEnum {
  BUS,
  CAR,
  VAN
}

const value: number = VehicleEnum.VAN;

/*
/!* TS2476: A const enum member can only be accessed using a string literal. *!/
const name = VehicleEnum[VehicleEnum.BUS];
*/

export {};