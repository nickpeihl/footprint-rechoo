const choo = require('choo')
const sf = require('sheetify')

sf('css-wipe/dest/bundle')
sf('tachyons')
sf('./node_modules/leaflet/dist/leaflet.css', { global: true })

const app = choo({
  onError: (err, state, createSend) => {
    console.log(err)
    const send = createSend('error')
    send('app:alert', err)
  }
})

const review = require('./views/review')

app.model({
  state: {
    navs: ['Help', 'About', 'Achievements']
  },
  effects: {
    doAsyncProcess: (data, state, send, done) => {
      console.log('doing something...')
      send('buttonGroup:toggleClickable', {}, () => {
        setTimeout(function () {
          console.log('done')
          send('buttonGroup:toggleClickable', {}, done)
        }, 2000)
      })
    }
  }
})

app.model(require('./models/footprint-map'))
app.model(require('./models/buttons'))
app.model(require('./models/vote-service'))

app.router((route) => [
  route('/', review)
])

const tree = app.start()
document.body.appendChild(tree)
