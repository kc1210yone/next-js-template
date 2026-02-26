import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setupFilesAfterEnv.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '6@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(customJestConfig);
