describe("createFormatter", function() {
  var createFormatter, record
  createFormatter = require('../../lib/dullstring')
  record =
    { name: 'access'
    , level: 10
    , levelName: function() { return 'DEBUG' }
    , message: function() { return 'foo - 10' }
    }

  it("creates a format function", function() {
    var frmt
    frmt = createFormatter(':message')
    assert.isFunction(frmt)
  })

  it("resolves simple attributes", function() {
    var frmt, str
    frmt = createFormatter(':level:name')
    str = frmt(record)
    assert.equal(str, '10access')
  })

  it("calls attributes that are resolved to functions", function() {
    var frmt, str
    frmt = createFormatter(':levelName :message')
    str = frmt(record)
    assert.equal(str, 'DEBUG foo - 10')
  })

  it("formats undefined as a dash", function() {
    var frmt, str
    frmt = createFormatter(':levelName :badvariable')
    str = frmt(record)
    assert.equal(str, 'DEBUG -')
  })
})
