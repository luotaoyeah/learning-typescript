import apply = Reflect.apply;

class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
  }
}

class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }
}

class SmartObject implements Disposable, Activatable {
  isActive: boolean = false;
  isDisposed: boolean = false;

  constructor() {
    setInterval(() => {
      console.log("isActive:", this.isActive); // tslint:disable-line
      console.log("isDisposed:", this.isDisposed); // tslint:disable-line
    }, 500);
  }

  activate: () => void;

  deactivate: () => void;

  dispose: () => void;

  interact() {
    this.activate();
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(SmartObject, [Disposable, Activatable]);

const smartObject = new SmartObject();

setTimeout(() => {
  smartObject.interact();
}, 1000);
