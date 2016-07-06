var choo = require('choo')
var sf = require('sheetify')

sf('css-wipe/dest/bundle')
sf('tachyons')
sf('./node_modules/leaflet/dist/leaflet.css', { global: true })

var app = choo()

var review = require('./views/review')

app.model({
  state: {
    params: {
      navs: ['Help', 'About', 'Achievements']
    }
  },
  effects: {
    doAsyncProcess: function (action, state, send) {
      console.log('doing something...')
      send('buttonGroup:toggleClickable')
      setTimeout(function () {
        console.log('done')
        send('buttonGroup:toggleClickable')
      }, 2000)
    }
  }
})

app.model(require('./models/footprint-map'))
app.model(require('./models/buttons'))

app.router(function (route) {
  return [
    route('/', review)
  ]
})

var tree = app.start()
document.body.appendChild(tree)
