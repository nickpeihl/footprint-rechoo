var choo = require('choo')
var L = require('leaflet')
require('esri-leaflet')

module.exports = function (params, state, send) {
  var maps = state.footprintMaps.maps
  return choo.view`

${maps.map(function (mapOpt) {
  var el = choo.view`
    <div class="dib ma2 ba bw1 mw7 w-80 w-40-ns bg-near-white tc tl-ns">
    <h2 class="ma2 f4">${mapOpt.id}</h2>
    ${createMapElement(mapOpt)}
  </div>
  `
  return el
})}

`
}

function createMapElement (mapOpt) {
  var mapOptions = mapOpt || {}
  var mapId = mapOptions.id || 'map'
  var el = choo.view`
  <div class="h5 ma2" id="${mapId}" onload=${function (el) {
    createMap(el, mapOptions)
  }}></div>
`
  return el
}

function createMap (mapId, mapOptions) {
  var map = L.map(mapId, mapOptions)
  var baseLayer = mapOptions.baseMap || L.esri.tiledMapLayer({
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer',
    maxZoom: 19
  })
  baseLayer.addTo(map)
}
