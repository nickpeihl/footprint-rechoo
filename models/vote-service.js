const VoteService = require('../lib/vote-service')

module.exports = {
  namespace: 'voteService',
  state: {
    url: 'http://services.arcgis.com/PNkCg7xWnaf90qde/arcgis/rest/services/Footprint_Compare_test/FeatureServer/0',
    proxy: '',
    token: '',
    voteFields: {
      'voteSjc': 'SJC_VOTES',
      'votePict': 'PICT_VOTES',
      'voteSkip': 'SKIPS',
      'voteFlag': 'FLAGS'
    },
    fpIdFields: {
      'sjc': 'SJC_Footprints_OBJECTID',
      'pict': 'PICT_Footprints_OBJECTID'
    },
    min: 0,
    max: 18772,
    service: '',
    lastId: ''
  },

  reducers: {
    updateVoteService: (data, state) => ({ service: data.payload }),
    receiveVote: (data, state) => ({ lastId: data.payload })
  },
  effects: {
    getVoteService: (data, state, send, done) => {
      const service = new VoteService(state)
      send('voteService:updateVoteService', { payload: service }, done)
    },
    sendVote: (data, state, send, done) => {
      state.service.addVote(data.id, (err, res) => {
        if (err) {
          done({ msg: 'ERROR: ' + err })
        }
        send('voteService:receiveVote', { payload: res }, done)
      })
    }
  }
}
