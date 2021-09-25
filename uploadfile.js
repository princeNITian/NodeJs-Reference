var formidable = require('formidable');
var http = require('http');
var fs = require('fs');

// Create a html form
// http.createServer(function(req,res){
//     res.writeHead('200',{'Content-Type': 'text/html'});
//     res.write('<file action="fileupload" method="post" encrypte="multipart/form-data">');
//     res.write('<input type="file" name="fileupload" > <br>');
//     res.write('<input type="submit" >');
//     res.write('</form>');
//     res.end();
// }).listen(8000);

// parse the uploaded file
// http.createServer(function(req,res){
//     if(req.url=='/fileupload'){
//         var form = new formidable.IncomingForm();
//         form.parse(req,function(err,fields,files){
//             res.write('File Uploaded!');
//             res.end();
//         })
//     }else{
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8000);

// Save the file
http.createServer(function(req,res){
    if(req.url=='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath = files.filetoupload.path;
            var newpath = "/home/prince/Desktop/Dev/JS/node/w3school/" + files.filetoupload.name;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8000);

