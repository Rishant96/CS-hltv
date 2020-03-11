const { HLTV } = require('hltv');
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'hltv-db-instance.c0bndg8bgr11.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'rishant',
  password : 'deathnoterocks96',
  database : 'hltv_db'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT hltv_id FROM Team", function (err, result, fields) {
    if (err) throw err;
    for (var i = result.length - 1; i >= 0; i--) {
        team_hltv_id = result[i].hltv_id;
        HLTV.getTeam({id: team_hltv_id}).then((team) => {
          plyr_cnt = 5;
          for (var i=4; i < 5; i++) {
            player_id = team.players[i].id;
            if (!player_id) {
              plyr_cnt -= 1;
            }
            else {
              HLTV.getPlayer({id: player_id}).then(res => {
                hltv_id = team.id
                con.query("SELECT avg_player_rating FROM Team WHERE hltv_id = ?", hltv_id,
                  function (err, result, fields) {
                    hltv_id = team.id
                    var sql = "UPDATE Team SET avg_player_rating = ? WHERE hltv_id = ?";
                    new_rating = result[0].avg_player_rating + res.statistics.rating;
                    new_rating = Math.round((new_rating * 100)) / 100;
                    console.log(hltv_id, new_rating)
                    // con.query(sql, [new_rating, hltv_id], function (err, result) {
                    //   if (err) throw err;
                    //   console.log(result.affectedRows + " record(s) updated");
                    // });
                  });
              });
             }
          }
        });
    }
  });
});
