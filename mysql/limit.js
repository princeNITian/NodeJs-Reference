const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

// con.connect(function(err){
//     if(err) throw err;
//     var sql = "SELECT * FROM customers LIMIT 2";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log(result);
//     })
// })

con.connect(function(err){
    if(err) throw err;
    // var sql = "SELECT * FROM customers LIMIT 2 OFFSET 3";
    var sql = "SELECT * FROM customers LIMIT 3, 2";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
    })
})