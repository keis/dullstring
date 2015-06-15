# dullstring

[![NPM Version][npm-image]](https://npmjs.org/package/dullstring)

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
