module.exports = {
  testEnviroment: 'jsdom',
  testPathIgnorePatters: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['sec/**/*.ts(x)'],
  setuoFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
