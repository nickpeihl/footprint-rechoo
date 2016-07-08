const html = require('choo/html')

const nav = require('../elements/nav')
const maps = require('../elements/maps')
const buttons = require('../elements/button-group')

module.exports = (state, prev, send) => {
  return html`
<div class="h-inherit">
${nav(state, prev, send)}
<article class="tc ma2">
${maps(state, prev, send)}
<div id="buttonGroup" class="w-80 mw7 center">
${buttons(state, prev, send)}
</div>
</article>
</div>
`
}
