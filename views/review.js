var choo = require('choo')

var nav = require('../elements/nav')
var maps = require('../elements/maps')
var buttons = require('../elements/button-group')

module.exports = function (params, state, send) {
  return choo.view`
<div class="h-inherit">
${nav(params, state, send)}
<article class="tc ma2">
${maps(params, state, send)}
<div id="buttonGroup" class="w-80 mw7 center">
${buttons(params, state, send)}
</div>
</article>
</div>
`
}
