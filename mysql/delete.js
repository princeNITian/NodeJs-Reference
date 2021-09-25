var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

con.connect(function(err){
    if(err) throw err;
    var sql = 'DELETE FROM customers where name="Amy"';
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
    })
})