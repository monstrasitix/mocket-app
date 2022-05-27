// Types
import type { Configuration } from 'webpack';

// Node
import { resolve } from 'path';

// Plugins
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HTMLPlugin from 'html-webpack-plugin';


/**
 * @summary ENV params
 */
export type Env = object;


/**
 * @summary Converted ENV params
 */
export type EnvParams = object;


/**
 * @summary Path from root
 * @param {String} path  - Path
 * @returns {String} Path
 */
export const root = (path: string): string => (
    resolve(__dirname, path)
);


/**
 * @summary Process ENV from CLI
 * @param {Env} env - Env params
 * @returns {EnvParams} Converted ENV params
 */
export const processEnv = (env: Env): EnvParams => (
    env
);


/**
 * @sumary Webpack Common
 * @param {Env} env - Env params
 * @returns {Configuration} Common webpack configuration
 */
export const common = (env: Env): Configuration => {
    processEnv(env);

    return {
        entry: {
            main: [
                root('./styles/index.scss'),
                root('./source/index.ts'),
            ],
        },

        output: {
            path: root('./bundled'),
            filename: '[name].[contenthash].bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/i,
                    use: 'ts-loader',
                },
                {
                    test: /\.s?css$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },

        resolve: {
            extensions: [
                '.js',
                '.json',
                '.scss',
                '.ts',
                '.tsx',
            ],
            plugins: [
                new TsconfigPathsPlugin(),
            ],
        },

        plugins: [
            new HTMLPlugin({
                template: root('./public/index.html'),
            }),
        ],
    };
};
