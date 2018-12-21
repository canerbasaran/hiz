
# hiz

hiz is some helper functions for javascript. It means fast in Turkish.


## Usage

#intersection
```js
const hiz = require('hiz');

const firstArray = [2, 9, 1, 0];
const secondArray = [1, 9, 2, 3];

console.log(hiz.intersection(firstArray, secondArray));
// => [1, 9, 2]
```

#MongoDB ObjectId
```js
console.log(hiz.objectId());
// => '5c1d692d9d0e873d3f76d05d'
```

## Benchmarks

Node 10.4.0:

```
hiz.intersection x 19,645 ops/sec ±1.38% (88 runs sampled)
intersect x 8,312 ops/sec ±0.58% (93 runs sampled)
lodash.intersection x 8,248 ops/sec ±1.40% (90 runs sampled)
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install hiz
```

## API

### intersection(firstArray, secondArray)

Find the intersection of arrays `firstArray` and `secondArray`.


## License

(MIT)

Copyright (c) 2018 Caner Basaran &lt;basaran.caner@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
