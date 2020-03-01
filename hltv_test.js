const { HLTV } = require('hltv');

// HLTV.getMatches().then((res) => {
//   console.log(res.slice(0, 5))
// })



results = HLTV.getResults({pages: 1}).then((res) => {
   // console.log(res.slice(0, 5))
   match_id = res[0].id
   console.log(match_id, typeof match_id)
   HLTV.getMatch({id: 72645}).then((match_stat) => {
       console.log(match_stat)
   })
})

// HLTV.getEvents(3).then(res => {
//     console.log(res[0].events[0])
// })
