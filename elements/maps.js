const html = require('choo/html')

const createMapElement = require('./map')
const mapStates = require('../models/footprint-map').state
const maps = mapStates.maps.map((options) => {
  createMapElement(options)
})

module.exports = (state, prev, send) => {
  return html`
    ${maps}
  `
}
