/**
 * Listing 4-17. Concrete factories
 */
import {
  BasicWheelCleaning,
  ExecutiveWheelCleaning,
  WheelCleaning
} from './list-4-13';
import {
  BasicBodyCleaning,
  BodyCleaning,
  ExecutiveBodyCleaning
} from './list-4-14';
import { ValetFactory } from './list-4-16';

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line

class OneWashFactory implements ValetFactory {
  getWheelCleaning(): WheelCleaning {
    return new BasicWheelCleaning();
  }

  getBodyCleaning(): BodyCleaning {
    return new BasicBodyCleaning();
  }
}

class TwoWashFactory implements ValetFactory {
  getWheelCleaning(): WheelCleaning {
    return new BasicWheelCleaning();
  }

  getBodyCleaning(): BodyCleaning {
    return new ExecutiveBodyCleaning();
  }
}

class ThreeWashFactory implements ValetFactory {
  getWheelCleaning(): WheelCleaning {
    return new ExecutiveWheelCleaning();
  }

  getBodyCleaning(): BodyCleaning {
    return new ExecutiveBodyCleaning();
  }
}

console.log('----------------------------------------------------------------------------------------------------'); // tslint:disable-line
export {
  OneWashFactory,
  TwoWashFactory,
  ThreeWashFactory
};