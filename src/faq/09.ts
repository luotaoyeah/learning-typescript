/**
 * How do I prevent two types from being structurally compatible?
 */

class ScreenCooidinate {
  private _screenCoordinateBrand: any;
  x: number;
  y: number;
}

class PrintCoordinate {
  private _printCoordinateBrand: any;
  x: number;
  y: number;
}

function sendToPrinter(coordinate: PrintCoordinate) {}

function getScreenCoordinate(): ScreenCooidinate {
  return { x: 1, y: 1 } as ScreenCooidinate;
}

/*
sendToPrinter(getScreenCoordinate());
*/

export {};
