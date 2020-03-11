const { HLTV } = require('hltv');
const mysql = require('mysql');
const fs = require('fs') 

const con = mysql.createConnection({
  host     : 'hltv-db-instance.c0bndg8bgr11.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'rishant',
  password : 'deathnoterocks96',
  database : 'hltv_db'
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT hltv_id FROM Team", function (err, result, fields) {
//     team = 29;
//     console.log(result[team].hltv_id);
//     result_ids = [];
//     HLTV.getResults({pages:1, teamID: result[team].hltv_id}).then(results => {
//         for(var i=0; i<results.length; i++) {
//             result_ids.push(results[i].id);
//         }
//         result_ids.push('');
//         console.log(result_ids);
//         // fs.writeFile('results_list.txt', result_ids, {flag: 'a'}, err => {
//         //     if (err) throw err;
//         //     console.log('team:', team);
//         //     con.end();
//         // });
//     });
//   });
// });


