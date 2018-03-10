/**
 * https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-imports-being-elided-in-my-emit
 */

/**
 * Q:
 */

/**
 * A: TypeScript assumes that module imports do not have side effects,
 * so it removes module imports that aren't used in any expression.
 * Use import "mod" syntax to force the module to be loaded.
 */

export {};
