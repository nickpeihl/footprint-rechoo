var choo = require('choo')
var sf = require('sheetify')

sf('css-wipe/dest/bundle')
sf('tachyons')

var app = choo()

var review = require('./views/review')

app.model({
  state: {
    params: {
      navs: ['Help', 'About', 'Achievements']
    }
  }
})

app.model(require('./models/footprint-map'))

app.router(function (route) {
  return [
    route('/', review)
  ]
})

var tree = app.start()
document.body.appendChild(tree)
