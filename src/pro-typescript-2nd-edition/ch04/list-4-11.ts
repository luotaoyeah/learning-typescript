/**
 * Listing 4-11. High-level dependency on low-level class
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

class Light {
  switchOn() {
    console.log("Light.switchOn()"); // tslint:disable-line
  }

  switchOff() {
    console.log("Light.switchOff()"); // tslint:disable-line
  }
}

class LightSwitch {
  private isOn: boolean = false;
  private light: Light;

  constructor(isOn: boolean, light: Light) {
    this.isOn = isOn;
    this.light = light;
  }

  onPress() {
    if (this.isOn) {
      this.isOn = false;
      this.light.switchOff();
    } else {
      this.isOn = true;
      this.light.switchOn();
    }
  }
}

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line
export {};
