module.exports = {
    ...require('./jest-common'),
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
    transform: {
        '^.+\\.ts$': 'esbuild-jest',
        '^.+\\.js$': 'esbuild-jest',
    },
    coveragePathIgnorePatterns: [],
    coverageThreshold: null,
}