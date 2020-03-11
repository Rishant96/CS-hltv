const { HLTV } = require('hltv');
const mysql = require('mysql');
let teams = []

const con = mysql.createConnection({
  host     : 'hltv-db-instance.c0bndg8bgr11.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'rishant',
  password : 'deathnoterocks96',
  database : 'hltv_db'
});

HLTV.getTeamRanking().then((res) => {
    teams = []
    for (i=0; i<res.length; i++) {
        teams.push([res[i].team.id, res[i].team.name]);
    }
    var sql = "INSERT INTO Team (hltv_id, avg_player_rating) VALUES ?";
    var values = teams;
    console.log(values);
    // con.query(sql, [values], function(err, result) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    // });
    con.end();
});
