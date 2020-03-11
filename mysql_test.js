const mysql = require('mysql')

const con = mysql.createConnection({
  host     : 'hltv-db-instance.c0bndg8bgr11.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'rishant',
  password : 'deathnoterocks96',
  database : 'hltv_db'
})

con.connect(function(err){
  if (err) throw err

    var query = "SELECT * FROM Team WHERE hltv_id = ? and avg_player_rating > ?"
    var values = [6665, 1.0]

    con.query(query, values, function (err, result) {
      if (err) throw err
      console.log(result)
    })
})