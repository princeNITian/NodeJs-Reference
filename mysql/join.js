const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});

con.connect(function(err){
    if(err) throw err;
    var sql = "SELECT students.id as roll, students.name AS student, customers.name AS customer FROM students CROSS JOIN customers ON students.name = customers.name";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
    })
})