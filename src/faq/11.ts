/**
 * Why am I getting Supplied parameters do not match any signature error?
 */

function createLog(message: string): number;
function createLog(source: string, message: string): number;
function createLog(source: string, message?: string): number {
  return 18;
}

createLog('tom');
createLog('tom', 'cat');

export {};
