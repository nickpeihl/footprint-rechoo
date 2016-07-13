module.exports = {
  namespace: 'footprintMaps',
  state: {
    maps: [{
      id: 'sjcMap',
      gj: { type: 'FeatureCollection', features: [] },
      center: [48.5, -123.0],
      zoom: 10
    }, {
      id: 'pictMap',
      gj: { type: 'FeatureCollection', features: [] },
      center: [48.5, -123.0],
      zoom: 10
    }]
  },
  reducers: {
    updateMap: (data, state) => {
      const newMaps = state.maps.map((lMap) => {
        Object.assign(lMap, {zoom: data.zoom, center: data.center})
      })
      return newMaps
    }
  }
}
