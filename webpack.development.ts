// Types
import 'webpack-dev-server';
import type { Configuration } from 'webpack';

// Webpack
import { merge } from 'webpack-merge';

// Common
import { Env, common, root } from './webpack.common';


export default (env: Env): Configuration => merge(common(env), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: root('./public'),
        },
    },
});
