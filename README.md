# dullstring

[![NPM Version][npm-image]](https://npmjs.org/package/dullstring)
[![Build Status][travis-image]](https://travis-ci.org/keis/dullstring)
[![Coverage Status][coveralls-image]](https://coveralls.io/r/keis/dullstring?branch=master)

A dull string formatter

## Installation

```bash
npm install --save dullstirng
```


## Usage

```javascript
var frmt = require('dullstring')('hello, :subj')
console.log(frmt({subj: 'world'}))
```


[npm-image]: https://img.shields.io/npm/v/dullstring.svg?style=flat
[travis-image]: https://img.shields.io/travis/keis/dullstring.svg?style=flat
[coveralls-image]: https://img.shields.io/coveralls/keis/dullstring.svg?style=flat
