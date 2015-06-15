// # Formatter

// Create a formatter function from pattern string
module.exports = function createFormatter(pattern) {
  var tokens = pattern.split(/(:[a-zA-Z]+)/)

  return function format(record) {
    return tokens.map(function (token) {
      // if it's not a placeholder return the token right away
      if (token[0] !== ':') {
        return token
      }

      // grab the value from the record, if it is a function call it
      // and then coerce it all to a string
      var val = record[token.substr(1)]

      if (val && val.call) {
        val = val.call(record)
      }

      return val !== void 0 ? '' + val : '-'
    }).join('')
  }
}
