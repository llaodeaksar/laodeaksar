const path = require('path')

const fromRoot = d => path.join(__dirname, d)

module.exports = {
    roots: [fromRoot('site'), fromRoot('packages/design-system')],
    resetMocks: true,
    coveragePathIgnorePatterns: [],
    collectCoverageFrom: ['<rootDir>/**/*.{js,ts,tsx}'],
    coverageThreshold: null,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest',
        '^.+\\.jsx?$': 'esbuild-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    moduleNameMapper: {
        '@theme/(.*)': fromRoot('site/core/$1'),
    },
}