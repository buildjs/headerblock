# headerblock

This is a small helper module that is used within [Interleave](https://github.com/buildjs/interleave) to generate header block comments for source files.

## Example Usage

```js
var headerblock = require('headerblock'),
    packageData = require('./package.json');

// call headerblock with artificial data
headerblock(packageData, function(err, output) {
  // generated, js block commented header generated and in output
});
```

If you want to generate a header block for a language such as [CoffeeScript](https://coffee-script.org) then you can specify the filetype:

```js
var headerblock = require('headerblock'),
    packageData = require('./package.json');

// call headerblock with artificial data
headerblock(packageData, { filetype: 'coffee' }, function(err, output) {
  // generated, coffeescript block commented header generated and in output
});
```