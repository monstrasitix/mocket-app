// Types
import type { Merchant } from '@type/merchant';
import type { Configuration } from 'webpack';

// Node
import { resolve } from 'path';

// Plugins
import HTMLPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { DefinePlugin, NormalModuleReplacementPlugin } from 'webpack';

// JSON
import { version } from './package.json';
import { compilerOptions } from './tsconfig.json';


/**
 * ENV parameters passed from CLI
 */
export type Env = {
    di: string;
    merchant: string;
};


/**
 * Dependency injection schema. Allows to specify what modules
 * should be swapped out during bundling.
 */
export type DIEnv = Record<string, string>;


/**
 * ENV params fom CLI get manipulated
 * and converted to this type.
 * @property {DIEnv} [di='default'] - Dependency injection file
 * @property {Merchant} [merchant='marketing2'] - Merchant name
 */
export type EnvParams = {
    di: DIEnv;
    merchant: Merchant;
};


/**
 * Returns path and is bound to `__dirname`
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
export const processEnv = ({
    di = 'default',
    merchant = 'marketing2',
}: Env): EnvParams => ({
    di: require(`./@di/${di}.ts`).default as DIEnv,
    merchant: require(`./@merchant/${merchant}.ts`).default as Merchant,
});


/**
 * Generates regex from path aliases. This makes sure only aliases
 * can be module replaced.
 * @param {Object} paths - Paths from TSConfig
 * @returns {RegExp}
 */
export const moduleRegex = (paths: Record<string, string[]>) => {
    const aliases: string[] = [];

    for (const key in paths) {
        aliases.push(key.slice(1, key.length - 2));
    }

    return new RegExp(`^(@(${aliases.join('|')})\\/.+)`, 'i');
};


/**
 * Webpack Common
 * @param {Env} env - Env params
 * @returns {Configuration} Common webpack configuration
 */
export const common = (env: Env): Configuration => {
    const { merchant, di }: EnvParams = processEnv(env);

    return {
        entry: {
            main: [
                root(`./styles/theme/${merchant.key}.scss`),
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
            alias: {
                '@style': root('../ui/scss'),
            },
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
                VERSION: JSON.stringify(`${version}`),
                MERCHANT: JSON.stringify(merchant),
            }),
            new NormalModuleReplacementPlugin(
                moduleRegex(compilerOptions.paths),
                (resource) => {
                    if (resource.request in di) {
                        resource.request = di[resource.request];
                    }
                },
            ),
        ],
    };
};
