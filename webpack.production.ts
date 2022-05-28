// Types
import type { Env } from './webpack.common';
import type { Configuration } from 'webpack';

// Webpack
import { merge } from 'webpack-merge';

// Common
import { common } from './webpack.common';

// Plugins
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


/**
 * @summary Webpack Production
 * @param {Env} env - Env params
 * @returns {Configuration} Production webpack configuration
 */
const config = (env: Env): Configuration => merge(common(env), {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ],
});


export default config;
