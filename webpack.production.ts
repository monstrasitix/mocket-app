// Types
import type { Configuration } from 'webpack';

// Webpack
import { merge } from 'webpack-merge';

// Common
import { Env, common } from './webpack.common';

// Plugins
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


export default (env: Env): Configuration => merge(common(env), {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ],
});
