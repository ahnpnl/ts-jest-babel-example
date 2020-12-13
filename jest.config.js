// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets');
/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest/presets/js-with-babel-esm',
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
};
