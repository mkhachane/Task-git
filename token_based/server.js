// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const user = require('./routes/userRouter');
mongoose.connect('mongodb://localhost/myapp');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
      res.json({
         "Tutorial": "Welcome to the Node express JWT Tutorial"
      });
   });


const PORT = 3030;
app.use('/user',  user)

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});
