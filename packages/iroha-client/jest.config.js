/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    transform: {
        '^.+\\.(ts|js)$': [
            'esbuild-jest',
            {
                sourcemap: true,
            },
        ],
    },
    testEnvironment: 'node',
    testMatch: ['**/test/integration/tests/**/*.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    modulePathIgnorePatterns: ['/dist/'],
    moduleNameMapper: {
        '^@iroha2/data-model': '<rootDir>/../iroha-data-model/src/lib.ts',
        '^@iroha2/i64-fixnum': '<rootDir>/../iroha-i64-fixnum/src/lib.ts',
    },
};

module.exports = config;