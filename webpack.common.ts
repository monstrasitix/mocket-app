// Types
import type { Configuration } from 'webpack';
import type { Merchant } from '@type/merchant';


// Node
import { resolve } from 'path';

// Plugins
import { DefinePlugin } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HTMLPlugin from 'html-webpack-plugin';


/**
 * @summary ENV params
 */
export type Env = {
    merchant: string;
};


/**
 * @summary Converted ENV params
 */
export type EnvParams = {
    merchant: Merchant;
};


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
export const processEnv = ({ merchant = 'marketing2' }: Env): EnvParams => ({
    merchant: require(`./@merchant/${merchant}.ts`).default as Merchant,
});


/**
 * @sumary Webpack Common
 * @param {Env} env - Env params
 * @returns {Configuration} Common webpack configuration
 */
export const common = (env: Env): Configuration => {
    const { merchant } = processEnv(env);

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
            new DefinePlugin({
                MERCHANT: JSON.stringify(merchant),
            }),
        ],
    };
};
