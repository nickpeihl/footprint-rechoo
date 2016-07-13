module.exports = {
  namespace: 'buttonGroup',
  state: {
    buttons: [{
      id: 'button1',
      text: 'Button 1',
      color: 'btn--black'
    }, {
      id: 'button2',
      text: 'Button 2',
      color: 'btn--black'
    }, {
      id: 'button3',
      text: 'Button 3',
      color: 'btn--gray'
    }, {
      id: 'button4',
      text: 'Button 4',
      color: 'btn--gray'
    }],
    disabled: false
  },
  reducers: {
    toggleClickable: (action, state) => ({disabled: !state.disabled})
  },
  effects: {}
}
