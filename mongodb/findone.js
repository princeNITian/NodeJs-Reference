var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err,db){
//     if(err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").findOne({}, function(err,res){
//         if(err) throw err;
//         console.log(res);
//         db.close();
//     });

// })


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });
  

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  
  
