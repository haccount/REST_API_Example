const express = require('express');
// const routes = require('./routes/api');

// set up express app
const app = express();

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 3001, function(){
  console.log("Now listening for requests");
});