const test = require('tape')
const voteService = require('../../models/vote-service')

test('voteService:effects:addVote', (t) => {
  t.test('functioning state', (tt) => {
    tt.plan(2)

    const state = {
      service: {
        addVote: (id, callback) => {
          callback(null, id)
        }
      }
    }

    const send = (e, data) => {
      tt.equal(e, 'voteService:receiveVote', 'calls correct reducer')
      tt.equal(data.payload, 436, 'uses correct id')
    }

    voteService.effects.sendVote({ id: 436 }, state, send)
  })
  t.test('error state', (tt) => {
    tt.plan(2)

    const state = {
      service: {
        addVote: (id, callback) => {
          callback('test error')
        }
      }
    }

    const send = (e, data) => {
      tt.equal(e, 'voteService:receiveVote', 'calls correct reducer')
    }

    voteService.effects.sendVote({ id: 436 }, state, send, (err, res) => {
      tt.ok(err)
    })
  })
})
