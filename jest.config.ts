const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });
// Any custom config you want to pass to Jest
/** @type {import('jest').Config} */

// Sync object
const customJestConfig = {
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/components/$1',
        '^pages/(.*)$': '<rootDir>/pages/$1',
        '^lib/(.*)$': '<rootDir>/lib/$1',
        '^tests/(.*)': '<rootDir>/tests/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
