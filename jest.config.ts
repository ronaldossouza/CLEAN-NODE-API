// eslint-disable-next-line @typescript-eslint/space-before-blocks
module.exports = {
  roots: ['<rootDir>/src>'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  },
  // coverageProvider: 'v8',
  // collectCoverage: true

}
