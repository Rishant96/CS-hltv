const { HLTV } = require('hltv');

HLTV.getMatches().then((res) => {
  console.log(res.slice(0, 5))
})



// results = HLTV.getResults({pages: 1}).then((res) => {
//    console.log(res.slice(0, 5))
// })

HLTV.getEvents(3).then(res => {
    console.log(res[0].events[0])
})
