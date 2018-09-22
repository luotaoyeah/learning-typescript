const path = require("path");

module.exports = [
  {
    entry: path.resolve("src/index.ts"),
    output: {
      path: path.resolve("dist/"),
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: "tslint-loader",
          enforce: "pre",
          include: [path.resolve("src")]
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js", ".json"]
    },
    target: "node",
    mode: "development",
    devtool: "eval-source-map"
  }
];
