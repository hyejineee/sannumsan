module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^presentational/(.*)': '<rootDir>/src/presentational/$1',
    '^container/(.*)': '<rootDir>/src/container/$1',
    '^_redux/(.*)': '<rootDir>/src/redux/$1',
    '^data/(.*)': '<rootDir>/src/data/$1',
    '^service/(.*)': '<rootDir>/src/service/$1',
    '^page/(.*)': '<rootDir>/src/page/$1',
    '^asset/(.*)': '<rootDir>/src/asset/$1',
    '^style/(.*)': '<rootDir>/src/style/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
  },
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(gpx|png|svg)$': '<rootDir>/assetTransformer.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/style/', '<rootDir>/src/asset/'],
};
