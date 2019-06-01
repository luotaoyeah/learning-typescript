/**
 * Listing 1-76. Abstract classes
 */

abstract class Logger {
  public abstract log(message: string): void;

  protected getMessage(message: string): string {
    return `[${new Date().toLocaleString()}]:${message}`;
  }
}

// tslint:disable-next-line:max-classes-per-file
class ConsoleLogger extends Logger {
  public log(message: string): void {
    console.log(this.getMessage(message));
  }
}

// tslint:disable-next-line:max-classes-per-file
class AlertLogger extends Logger {
  public log(message: string): void {
    alert(this.getMessage(message));
  }
}

let logger: Logger;

/*
/!* TS2511: Cannot create an instance of the abstract class 'Logger'. *!/
logger = new Logger();
*/

logger = new ConsoleLogger();
logger.log("console logger");

logger = new AlertLogger();
logger.log("alert logger");

export {};
