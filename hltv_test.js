const { HLTV } = require('hltv');

// HLTV.getMatches().then((res) => {
//   console.log(res.slice(0, 5))
// })

HLTV.getResults({pages: 1}).then((res) => {
  console.log(res.slice(0, 5))
})