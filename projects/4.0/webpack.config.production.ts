import * as webpack from 'webpack';
import commonConfig from './webpack.config';
import path from 'path';
import webpackMerge = require('webpack-merge');

const config: webpack.Configuration = webpackMerge.merge(commonConfig, {
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
});

export default config;
