const html = require('choo/html')
const L = require('leaflet')
const sf = require('sheetify')
require('esri-leaflet')

const prefix = sf`
  @media screen and (min-width: 30em) {
    :host {height: 32rem; }
  }
`

module.exports = (options) => {
  function onload (node) {
    map.invalidateSize()
  }

  const el = html`<div onload=${onload} id=${options.id} class="h5 ${prefix}"></div>`
  const map = createMap(el, options)

  const container = html`
 <div class="dib ma2 ba bw1 mw7 w-80 w-40-ns bg-near-white tc tl-ns">
    <h2 class="ma2 f4">${options.id}</h2>
      ${el}
  </div>
`
  return container
}

function createMap (el, options) {
  const map = L.map(el, options)
  options.baseMap || L.esri.tiledMapLayer({
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer',
    maxZoom: 19
  }).addTo(map)

  return map
}
