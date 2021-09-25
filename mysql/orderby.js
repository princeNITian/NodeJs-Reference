var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });