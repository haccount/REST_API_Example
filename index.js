const express = require('express');

// set up express app
const app = express();

// handle GET request
app.get('/', function(req, res){
  console.log('GET request');
  res.send({name: 'John'});
});

// listen for requests
app.listen(process.env.port || 3001, function(){
  console.log("Now listening for requests");
});