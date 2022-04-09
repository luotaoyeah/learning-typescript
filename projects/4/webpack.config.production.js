import commonConfig from './webpack.config';
import path from 'path';
import { merge } from 'webpack-merge';

const config = merge(commonConfig, {
    mode: 'production',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
});

export default config;
