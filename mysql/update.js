var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

con.connect(function(err){
    if(err) throw err;
    var sql = 'UPDATE customers set name="Johny" where name="John"';
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('Row affected: ',result.affectedRows);
    })
})