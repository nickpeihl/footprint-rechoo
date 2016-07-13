const html = require('choo/html')

const createMapElement = require('./map')
const mapStates = require('../models/footprint-map').state
const maps = mapStates.maps

module.exports = (state, prev, send) => {
  var el = html`${maps.map((options) => (createMapElement(options)))}`
  return el
}
