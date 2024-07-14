module.exports = {
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputName: 'junit.xml',
      },
    ],
  ],
};