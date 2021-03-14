# rollup-plugin-files-size

[![Build Status](https://travis-ci.com/vladshcherbin/rollup-plugin-files-size.svg?branch=master)](https://travis-ci.com/vladshcherbin/rollup-plugin-files-size)
[![Codecov](https://codecov.io/gh/vladshcherbin/rollup-plugin-files-size/branch/master/graph/badge.svg)](https://codecov.io/gh/vladshcherbin/rollup-plugin-files-size)

Show your bundle files size.

![Plugin output screenshot](screenshot.png)

## Installation

```bash
# yarn
yarn add rollup-plugin-files-size -D

# npm
npm install rollup-plugin-files-size -D
```

## Usage

```js
// rollup.config.mjs
import filesSize from 'rollup-plugin-files-size'

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    filesSize()
  ]
}
```

## License

MIT
