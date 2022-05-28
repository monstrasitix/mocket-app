// Types
import type { Config } from '@jest/types';

// JSON
import { compilerOptions } from './tsconfig.json';


export const mapPath = (key: string) => (
    `^\\${key.slice(0, key.length - 1)}(.*)`
);


export const mapValue = (value: string) => (
    `<rootDir>/source/${value.slice(2, value.length - 1)}$1`
);


const mapModules = (paths: Record<string, string[]>) => {
    const acc = {};

    for (const [key, [value]] of Object.entries(paths)) {
        acc[mapPath(key)] = mapValue(value);
    }

    return acc;
};


export default (): Config.InitialOptions => ({
    rootDir: './',
    coverageDirectory: './coverage',
    verbose: true,
    collectCoverage: true,
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: mapModules(compilerOptions.paths),
});

