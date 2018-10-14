/**
 * Listing 1-76. Abstract classes
 */

abstract class Logger {
  abstract log(message: string): void;

  protected getMessage(message: string): string {
    return `[${new Date().toLocaleString()}]:${message}`;
  }
}

class ConsoleLogger extends Logger {
  log(message: string): void {
    console.log(this.getMessage(message));
  }
}

class AlertLogger extends Logger {
  log(message: string): void {
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
