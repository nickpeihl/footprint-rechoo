module.exports = {
  namespace: 'buttonGroup',
  state: {
    buttons: [{
      id: 'button1',
      text: 'Button 1',
      color: 'btn--black',
      disabled: false
    }, {
      id: 'button2',
      text: 'Button 2',
      color: 'btn--black',
      disabled: false
    }, {
      id: 'button3',
      text: 'Button 3',
      color: 'btn--gray',
      disabled: false
    }, {
      id: 'button4',
      text: 'Button 4',
      color: 'btn--gray',
      disabled: false
    }]
  },
  reducers: {
    toggleClickable: function (action, state) {
      var newButtons = state.buttons.map(function (button) {
        button.disabled = !button.disabled
        return button
      })
      return {buttonGroup: state.buttons.concat(newButtons)}
    }
  },
  effects: {
    doAsyncProcess: function (action, state, send) {
      console.log('doing something...')
      send('buttonGroup:toggleClickable')
      setTimeout(function () {
        console.log('done')
        send('buttonGroup:toggleClickable')
      }, 2000)
    }
  }
}
