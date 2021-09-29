module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.test.json',
      isolatedModules: true
    }
  },
  globalSetup: 'jest-environment-puppeteer/setup',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: false,
  resetModules: true,
  modulePaths: ['<rootDir>/src/bp/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  testMatch: ['**/e2e/**/*.test.(ts|js)'],
  testPathIgnorePatterns: ['out', 'build', 'node_modules', 'src/bp'],
  rootDir: '.',
  testEnvironment: '<rootDir>/jest.environment.js',
  testResultsProcessor: '<rootDir>/../../node_modules/jest-html-reporter',
  testRunner: 'jest-circus/runner'
}
