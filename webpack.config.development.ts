import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import path from 'path';
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge.merge(commonConfig, {
  mode: 'development',
  target: 'node',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist-development'),
  },
});

export default config;
