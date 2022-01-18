const snapshotSerializers = require('jest-preset-angular/build/serializers');

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  preset: 'jest-preset-angular',
  snapshotSerializers,
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  },
  transformIgnorePatterns:
    ['node_modules/(?!.*\\.mjs$)']
   ,
  testPathIgnorePatterns: ['/node_modules/'],
};
