var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     var dbo = db.db("mydb");
//     var myquery = { name: 'John' };
//     dbo.collection("customers").deleteOne(myquery,function(err,res){
//         if(err) throw err;
//         console.log(res);
//         db.close();
//     })
// })

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^O/ };
    dbo.collection("customers").deleteMany(myquery,function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    })
})