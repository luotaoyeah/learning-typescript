/**
 * Why are all types assignable to empty interfaces?
 */

interface Empty {}

function test(empty: Empty) {}

test(window);
test(18);
test("tom");

export {};
