module.exports = {
  namespace: 'footprintMaps',
  state: {
    center: [48.5, -123.0],
    zoom: 10,
    maps: [{
      id: 'sjcMap',
      gj: { type: 'FeatureCollection', features: [{type: 'Feature', properties: {}, geometry: {type: 'Polygon', coordinates: [[[-123.066, 48.468], [-123.066, 48.612], [-122.872, 48.612], [-122.872, 48.468], [-123.066, 48.468]]]}}] }
    }, {
      id: 'pictMap',
      gj: { type: 'FeatureCollection', features: [{type: 'Feature', properties: {}, geometry: {type: 'Polygon', coordinates: [[[-123.066, 48.468], [-123.066, 48.612], [-122.872, 48.612], [-122.872, 48.468], [-123.066, 48.468]]]}}] }
    }]
  },
  reducers: {
    updateMaps: (data, state) => {
      return { center: data.center, zoom: data.zoom, maps: data.maps }
    }
  }
}
