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

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

con.connect(function(err) {
  if (err) throw err;
  let matches_str = '';
  fs.readFile('results_list.txt', 'utf8', function(err, data) {
      if (err) throw err;
      data = data.split(',');
      matches = [];
      for (var i=0; i<data.length; i++) {
          matches.push(parseInt(data[i]));
      }
     console.log(matches);
     matches = matches.filter(onlyUnique);
     console.log(matches);
     for (var i=200; i<250; i++) {
         HLTV.getMatch({id: matches[i]}).then(match => {
             console.log(match.date);
             console.log(match.team1.id);
             console.log(match.team2.id);
             for (var j=0; j<match.maps.length;j++) {
                // d2, ovp, trn, nuke, inf, vertigo, mrg
               result = match.maps[j].result.split(' ')[0].split(':');
               // console.log(result);
               result = parseInt(result[0]) - parseInt(result[1]);
               if (Number.isNaN(result)) continue;
               map = match.maps[j].name;
               console.log(map);
               console.log(result);
               map_id = -1;
               switch(map) {
                case 'd2':
                  map_id = 1;
                  break;
                case 'ovp':
                  map_id = 2;               
                  break;
                case 'inf':
                  map_id = 3;               
                  break;
                case 'trn':
                  map_id = 4;               
                  break;
                case 'nuke':
                  map_id = 5;               
                  break;
                case 'vertigo':
                  map_id = 6;               
                  break;
                case 'mrg':
                  map_id = 7;               
                  break;
                default:
                  continue;
               }
                console.log(map_id);
               
                sql = "INSERT INTO Matchup (game_date, map_id, id_team_1, id_team_2, round_diff) VALUES (?, ?, ?, ?, ?)";
                values = [match.date, map_id, match.team1.id, match.team2.id, result];
                con.query(sql, values, function (err, result) {
                 if (err) {
                   console.log('i:' + i);
                   throw err;
                 }
                 console.log("Number of records inserted: " + result.affectedRows);
                });
                console.log(i)
             }
             console.log()
         });
     }
  });
});
