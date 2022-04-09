/*
 * Module Resolution
 *     Additional module resolution flags
 *         --traceResolution
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 使用命令行参数 --traceResolution 可以打印模块解析的跟踪信息
 */

// ======== Resolving type reference directive 'node', containing file 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/mongodb/index.d.ts', root directory 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types'. ========
// Resolving with primary search path 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types'.
// 'package.json' does not have a 'typings' field.
// 'package.json' has 'types' field 'index' that references 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index'.
// 'package.json' does not have a 'typesVersions' field.
// Found 'package.json' at 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/package.json'. Package ID is '@types/node/index.d.ts@10.12.15'.
// 'package.json' does not have a 'typesVersions' field.
// 'package.json' does not have a 'typings' field.
// 'package.json' has 'types' field 'index' that references 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index'.
// File 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index' does not exist.
// Loading module as file / folder, candidate module location 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index', target file type 'TypeScript'.
// File 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index.ts' does not exist.
// File 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index.tsx' does not exist.
// File 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index.d.ts' exist - use it as a name resolution result.
// Resolving real path for 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index.d.ts', result 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index.d.ts'.
// ======== Type reference directive 'node' was successfully resolved to 'D:/project/git/luotaoyeah/learning-typescript/node_modules/@types/node/index.d.ts', primary: true. ========

export {};
