var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'testing'
});


// con.connect(function(err){
//     if(err) throw err;
//     con.query('create table student(rollno int(11),name varchar(255))',function(err,result){
//         if(err) throw err;
//         console.log('result: ', JSON.stringify(result));
//     })
// });


con.connect(function(err){
    if(err) throw err;
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('result: ', JSON.stringify(result));
    })
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table altered");
//     });
//   });