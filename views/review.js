var choo = require('choo')

var nav = require('../elements/nav')
var maps = require('../elements/maps')

module.exports = function (params, state, send) {
  return choo.view`
<div class="h-inherit">
${nav(params, state, send)}
<section class="cf h-auto-ns">
${maps(params, state, send)}
</section>
</div>
`
}
