## package-path

Return the package path of given module filename.

## Install

```bash
$ npm install package-path
```

## Usage

```js
var packagePath = require('package-path')

packagePath('/path/to/a/module.js', function (projectPath) {

  projectPath
  // => /path/to/the/package

});
```

See `test/index.js` for more info.
