# headerblock

This is a small helper module that is used within
[Interleave](https://github.com/buildjs/interleave) to generate header
block comments for source files.


[![NPM](https://nodei.co/npm/headerblock.png)](https://nodei.co/npm/headerblock/)

[![Build Status](https://travis-ci.org/buildjs/headerblock.png?branch=master)](https://travis-ci.org/buildjs/headerblock)

## Example Usage

```js
var headerblock = require('headerblock');
var packageData = require('./package.json');

// call headerblock with artificial data
headerblock(packageData, function(err, output) {
  // generated, js block commented header generated and in output
});
```

If you want to generate a header block for a language such as
[CoffeeScript](https://coffee-script.org) then you can specify the filetype:

```js
var headerblock = require('headerblock');
var packageData = require('./package.json');

// call headerblock with artificial data
headerblock(packageData, { filetype: 'coffee' }, function(err, output) {
  // generated, coffeescript block commented header generated and in output
});
```

## Sample Generated Header Blocks

To be completed.

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
