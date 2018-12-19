var express = require("express");
var multer = require('multer');
var app =   express();  
app.use(express.static('public'))

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('myfile');  
  
app.get('/upload.html',function(req,res){  
      res.sendFile(__dirname + "/upload.html");  
});  
  
app.post('/upload',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });  
});  
  
app.listen(8080,function(){  
    console.log("Server is running on port 8080");  
});  
