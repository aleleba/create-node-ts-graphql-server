const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const aliases = pathsToModuleNameMapper(compilerOptions.paths, {
	prefix: '<rootDir>'
});

module.exports = {
    testEnvironment: 'node',
    transform: {
      "^.+\\.ts$": "ts-jest"
    },moduleNameMapper: {
      ...aliases,
    },
};