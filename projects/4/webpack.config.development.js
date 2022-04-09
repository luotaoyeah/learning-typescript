import commonConfig from './webpack.config';
import path from 'path';
import { merge } from 'webpack-merge';

const config = merge(commonConfig, {
    mode: 'development',
    target: 'node',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist-development'),
    },
});

export default config;
