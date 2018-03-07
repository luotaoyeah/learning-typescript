/**
 * Listing 1-10. Enumeration
 */

enum VehicleEnum {
  MOTORCYCLE,
  CAR,
  VAN,
  BUS,
  LORRY
}

const vehicle1: number = VehicleEnum.BUS;

const vehicle2: VehicleEnum = VehicleEnum.BUS;

const enumName: string = VehicleEnum[VehicleEnum.BUS];

export {};