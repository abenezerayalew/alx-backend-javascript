const names = require('./test1.js')
const sayhi = require('./test2.js').sayhi
sayhi('susan')
sayhi(names.john)
sayhi(names.peter)