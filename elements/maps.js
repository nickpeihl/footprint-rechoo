var choo = require('choo')
var L = require('leaflet')
require('esri-leaflet')

module.exports = function (params, state, send) {
  var maps = state.footprintMaps.maps
  return choo.view`

${maps.map(function (mapOpt) {
  var el = choo.view`
    <article class="bg-white w-90-ns mw9-l ba b-black-10 mh3 mv3 h-50-l h-auto">
    <div class="pv2 ph2">
    <h2 class="">${mapOpt.id}</h2>
    </div>
    ${createMap(mapOpt)}
    </article>
  `
  return el
})}

`
}

function createMap (mapOpt) {
  var mapOptions = mapOpt || {}
  var mapId = mapOptions.id || 'map'
  var el = choo.view`
<div class="h5" id="${mapId}"></div>
`
  var map = L.map(el, mapOptions)
  var baseLayer = mapOpt.baseMap || L.esri.tiledMapLayer({
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer',
    maxZoom: 19
  })
  baseLayer.addTo(map)
  map.invalidateSize()
  return el
}
