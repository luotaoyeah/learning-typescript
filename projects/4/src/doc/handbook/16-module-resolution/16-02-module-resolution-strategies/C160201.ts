/*
 * Module Resolution
 *     Module Resolution Strategies
 *         Node
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 有两种模块解析策略：node 和 classic
 * 可以通过 --moduleResolution 进行配置
 *
 * 如果没有进行配置，则：
 *     对于 --module 为 amd，system，es2015 时，策略为 classic
 *     其他都为 node
 */

/*
 * node 解析策略，主要就是用来模拟 nodejs 的模块解析策略
 * 具体如下：
 *     对于 relative 地址，如：var x = require('./mod01')
 *         1. 当前目录是否存在 mod01.js
 *         2. 当前目录是否存在 mod01 文件夹，且其中存在 package.json 文件，且其中存在 main 属性，指向对应的JS文件
 *         3. 当前目录是否存在 mod01 文件夹，且其中存在 index.js 文件
 *     对于 non-relative 地址，如：var x = require('mod01')
 *         1. 当前目录是否存在 node_modules 文件夹，
 *                1.1. 其中是否存在 mod01.js
 *                1.2. 其中是否存在 mod01 文件夹，且其中存在 package.json 文件，且其中存在 main 属性，指向对应的JS文件
 *                1.3. 其中是否存在 mod01 文件夹，且其中存在 index.js 文件
 *         2. 上级目录是否存在 node_modules 文件夹，重复上面的三个步骤
 *         3. 以此类推，重复上面的步骤，直到根目录为止
 *
 */

export {};
