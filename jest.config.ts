const nextJest = require('next/jest');
const createJestConfig = nextJest({
    dir: './',
});
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/app(.*)$': '<rootDir>/src/app$1',
        '^@/components(.*)$': '<rootDir>/src/components$1',
        '^@/slices(.*)$': '<rootDir>/src/slices$1',
        '^@/store(.*)$': '<rootDir>/src/store$1',
        '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@/services(.*)$': '<rootDir>/src/services$1',

    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],

    // testPathIgnorePatterns: [
    //   '/__helpers__/'
    // ]
};
module.exports = createJestConfig(customJestConfig);