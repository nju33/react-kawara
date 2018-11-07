module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testRegex: '(/__tests__/.*|\.test)\.tsx?$',
};
