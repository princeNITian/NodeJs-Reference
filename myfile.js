var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data) {
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
  
}).listen(8000);

fs.appendFile('hello.txt',"Hello there!",function(err){
    if(err) throw err;
    console.log('Saved!');
})

fs.open('hello1.txt','w',function(err,file){
    if(err) throw err;
    console.log('New file created!',file);
})

fs.writeFile('hello2.txt','Hi new file',function(err){
    if(err) throw err;
    console.log('New file created!');
})

// fs.unlink('hello.txt',function(err){
//     if(err) throw err;
//     console.log('Deleted!');
// })

fs.rename('hello.txt','helloRenamed.txt',function(err){
    if(err) throw err;
    console.log('Renamed!');
})