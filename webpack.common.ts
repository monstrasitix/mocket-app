// Types
import type { Configuration } from 'webpack';

// Node
import { resolve } from 'path';

// Plugins
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as HTMLPlugin from 'html-webpack-plugin';


export type Env = object;
export type EnvParams = object;


export const root = (path: string): string => (
    resolve(__dirname, path)
);


export const processEnv = (env: Env): EnvParams => (
    env
);


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
