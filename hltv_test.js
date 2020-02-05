const { HLTV } = require('hltv');

HLTV.getMatches().then((res) => {
  console.log(res.slice(0, 5))
})