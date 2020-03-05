const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'hltv-db-instance.c0bndg8bgr11.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'rishant',
  password : 'deathnoterocks96',
  database : 'hltv_db'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... ");    
        // connection.query("CREATE DATABASE hltv_db", function (err, result) {
        //     if (err) throw err;
        //     console.log("Database created");
        //   });

    } else {
        console.log("Error connecting database ... ");    
    }
});

