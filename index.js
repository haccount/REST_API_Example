const express = require('express');
// const routes = require('./routes/api');
const bodyParser = require('body-parser');

// set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 3001, function(){
  console.log("Now listening for requests");
});