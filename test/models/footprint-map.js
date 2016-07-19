const test = require('tape')
const footprintMap = require('../models/footprint-map')

const gj1 = {type:'Feature',properties:{},geometry:{type:'Polygon',coordinates:[[[-123.066,48.468],[-123.066,48.612],[-122.872,48.612],[-122.872,48.468],[-123.066,48.468]]]}}
const gj2 = {type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-122.966,48.612],[-123.065,48.539],[-122.966,48.468],[-122.872,48.539],[-122.966,48.612]]]}}

// test('footprintMaps:effects:getFeatures', (t) => {
//   const state = {
//     maps: [{
//       id: 'map1',
//       fpService: 'http://example.com/service1',
//       fpId: 0
//     }, {
//       id: 'map2',
//       fpService: 'http://example.com/service2',
//       fpId: 0
//     }]
//   }

//   const send = (e, data) => {
//     t.equal(e, 'footprintMaps:updateMaps', 'calls correct reducer')
//     t.deepEqual(data.payload, { maps: [{ id: 'map1', gj: gj1 }, { id: 'map2', gj: gj2 }] })
//   }

//   footprintMap.effects.getFeatures({}, state, send)
// })
