/*
 * Module Resolution
 *     Additional module resolution flags
 *         paths
 */

console.log("\n-------------------------------------------------- 01");
/*
 * paths 用来指定路径映射，如果指定 paths 则必须也指定 baseUrl
 *
 * 假设有如下配置：
 *     baseUrl: "dist",
 *     paths: [
 *       "@/*": "src/*"
 *     ]
 *
 * 对于 import x from '@/mod01'
 * 根据路径映射，会被替换为 import x from 'src/mod01'
 * 因为 src/mod01 是一个 non-relative 地址，因此会使用 baseUrl 进行解析，
 *     即：import x from 'dist/src/mod01'
 */

export {};
