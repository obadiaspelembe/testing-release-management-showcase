// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig');

// module.exports = {
//   jest(config) {
//     config.collectCoverageFrom = [
//       'src/**/*.{js,jsx}',
//       '!src/index.js',
//       '!src/reportWebVitals.js',
//     ];
//     config.coverageReporters = ['text', 'cobertura'];
//     config.reporters = [
//       'default',
//       [
//         'jest-junit',
//         {
//           outputDirectory: './reports',
//           outputName: 'junit.xml',
//         },
//       ],
//     ];
//     return config;
//   },
// };


module.exports = {
    jest(config) {
      config = {
        ...config,
        ...require('./jest.config.js'),
      };
      return config;
    },
  };