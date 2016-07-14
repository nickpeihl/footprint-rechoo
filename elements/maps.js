const html = require('choo/html')

const createMapElement = require('./map')
const initialMapStates = require('../models/footprint-map').state
const mapElements = initialMapStates.maps.map((initialMapState) => createMapElement({ initialState: initialMapState}))

// We need to construct the initial maps outside the module

module.exports = (state, prev, send) => {
  const container = mapElements.map((el) => (el(state, prev, send)))
  return container
}
