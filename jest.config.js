const snapshotSerializers = require('jest-preset-angular/build/serializers');

module.exports = {
  preset: 'jest-preset-angular',
  snapshotSerializers,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/image.js',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  transform: {
    '^.+\\.js': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@ionic-native|@ionic|@ionic/core|ionic-angular|@angular)',
    '.+\\.json',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/__mocks__', '<rootDir>/src/.*/__mocks__'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageReporters: [['lcov', { projectRoot: '../' }], 'text-summary'],
};
