// Types
import 'webpack-dev-server';
import type { Env } from './webpack.common';
import type { Configuration } from 'webpack';

// Webpack
import { merge } from 'webpack-merge';

// Common
import { common, root } from './webpack.common';


/**
 * @summary Webpack Development
 * @param {Env} env - Env params
 * @returns {Configuration} Development webpack configuration
 */
const config = (env: Env): Configuration => merge(common(env), {
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


export default config;
