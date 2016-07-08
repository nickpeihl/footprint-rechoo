const html = require('choo/html')
const L = require('leaflet')
require('esri-leaflet')

module.exports = (options) => {
  function onload (node) {
    map.invalidateSize()
  }

  const el = html`<div onload=${onload} id=${options.id}></div>`
  const map = createMap(el, options)
  return (state, prev, send) => {
    map.setZoom(state.map.zoom)
    map.panTo(state.map.center)
    return html`
 <div class="dib ma2 ba bw1 mw7 w-80 w-40-ns bg-near-white tc tl-ns">
    <h2 class="ma2 f4">${options.id}</h2>
      ${el}
  </div>
`
  }
}

function createMap (id, options) {
  const map = L.map(id, options)
  options.baseMap || L.esri.tiledMapLayer({
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer',
    maxZoom: 19
  }).addTo(map)

  return map
}
