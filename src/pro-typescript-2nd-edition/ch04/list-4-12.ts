/**
 * Listing 4-12. Implementing the dependency inversion principle (DIP)
 */

console.log(
  "----------------------------------------------------------------------------------------------------"
); // tslint:disable-line

interface LightSource {
  switchOn(): void;

  switchOff(): void;
}

class Light implements LightSource {
  switchOn() {
    console.log("Light.switchOn()"); // tslint:disable-line
  }

  switchOff() {
    console.log("Light.switchOff()"); // tslint:disable-line
  }
}

class LightSwitch {
  private isOn: boolean = false;
  private light: LightSource;

  constructor(isOn: boolean, light: LightSource) {
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
