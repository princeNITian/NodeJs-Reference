var http = require('http');

// http.createServer(function(req,res) {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write('Hello World');
//     res.end();
// }).listen(8000);



// Read the query
// http.createServer(function(req,res) {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8000);



// Split the query
// http://localhost:8080/?year=2017&month=July
var url = require('url');
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8000);
