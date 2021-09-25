var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

// con.connect(function(err){
//     if(err) throw err;
//     // var sql = "SELECT name,address from customers where name='Betty';";
//     var sql = "SELECT name,address from customers where address LIKE 'S%';";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log(result);
//     })
// })


// con.connect(function(err){
//     if(err) throw err;
//     var adr = 'Mountain 21';
//     var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
//     con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     });
// })

// con.connect(function(err){
//     if(err) throw err;
//     var adr = 'Mountain 21';
//     var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
//     con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     });
// })

// con.connect(function(err){
//     if(err) throw err;
//     var adr = 'Mountain 21';
//     var sql = 'SELECT * FROM customers WHERE address = ?';
//     con.query(sql, [adr], function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     });
// })

con.connect(function(err){
    if(err) throw err;
    var adr = 'Mountain 21';
    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    });
})