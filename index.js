const express = require('express');
// const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
// setting up db as 'samplego'; doesn't matter that it doesn't exist yet, mongoose will go out and create it
mongoose.connect('mongodb://localhost/samplego')
// overwrite mongoose promise because it is deprecated
mongoose.Promise = global.Promise;

app.use(express.static('public'))

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// add in middleware for error handling
app.use(function(err,req,res,next){
  // console.log(err);
  res.status(422).send({error: err.message})
})

// listen for requests
app.listen(process.env.port || 3001, function(){
  console.log("Now listening for requests");
});