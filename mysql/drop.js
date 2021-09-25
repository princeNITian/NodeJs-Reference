var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

// con.connect(function(err){
//     if(err) throw err;
//     var sql = "DROP TABLE customers";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log('Table deleted!');
//     })
// })

con.connect(function(err){
    if(err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('Table deleted!');
    })
})