module.exports = {
  testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    testPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    verbose: true
};
