// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  /**
   *  If you comment this out, you will get error unexpected token with optional chaining because you are using babel in your project
   *  When using babel together with ts-jest in a project, you need to let ts-jest know about it
   */
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
  /**
   * You can use jsWithBabel preset provided by ts-jest so you don't need to define transform here. The preset jsWithBabel
   * will automatically define "^.+\\.jsx?$": "babel-jest" for you
   */
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
  testRegex: [/.*\.(spec|test)\.[jt]sx?$/],
};

