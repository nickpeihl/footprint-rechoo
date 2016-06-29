var choo = require('choo')

var nav = require('../elements/nav')
var maps = require('../elements/maps')

module.exports = function (params, state, send) {
  return choo.view`
<div class="h-inherit">
${nav(params, state, send)}
<article class="tc ma2">
${maps(params, state, send)}
</article>
</div>
`
}
