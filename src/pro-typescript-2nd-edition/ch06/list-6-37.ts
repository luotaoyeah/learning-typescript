/**
 * Listing 6-37. Type definitions for battery status
 */

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: () => any;
  onchargingtimechange: () => any;
  ondischargingtimechange: () => any;
  onlevelchange: () => any;
}

interface Navigator {
  battery: BatteryManager;
  mozBattery: BatteryManager;
  webkitBattery: BatteryManager;
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
