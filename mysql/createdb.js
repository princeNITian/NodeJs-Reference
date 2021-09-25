// https://codeforgeek.com/nodejs-mysql-tutorial/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "newpassword"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('drop database linuxhint;', function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });
  });