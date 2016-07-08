const html = require('choo/html')

module.exports = (state, prev, send) => {
  const navs = state.navs
  return html`
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
  return html`
<a class="link dim white dib mr3" href="/${nav}" title="${nav}">${nav}</a>
`
}
