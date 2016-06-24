var choo = require('choo')

module.exports = function (params, state, send) {
  var navs = state.params.navs
  return choo.view`
<header class="bg-black-90 w-100 ph2 pv2 pv4-l ph4-l">
<nav class="f6 fw6 ttu tracked">
<a class="link dim white dib mr3" href="/" title="Home">Home</a>
${navs.map(function (nav) {
  return createNav(nav)
})}
</nav>
</header>
`
}

function createNav (nav) {
  return choo.view`
<a class="link dim white dib mr3" href="/${nav}" title="${nav}">${nav}</a>
`
}
