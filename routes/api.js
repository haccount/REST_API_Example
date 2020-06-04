const express = require('express');
const router = express.Router();
const Sample = require('../models/samples')

// instead of app.get, we attach the methods to the route objecs set above,  the following:
// get a list of stuff from the db
router.get('/sample', function(req, res){
  res.send({type: 'GET'});
});

// add new stuff to the db
router.post('/sample', function(req, res){
  // console.log(req.body);

  Sample.create(req.body).then(function(sample){
    res.send(sample
    //   {
    //   type: 'POST',
    //   name: req.body.name,
    //   rank: req.body.rank
    // }
    );
  }); 
  //creates a new instance of the Sample object locally and saves to the database
  // a promise is returned, we need to wait for the action to be completed, so tack on .then method, function only fires once the action has been completed, then send back the sample that we've save to the db.

  // var sample = new Sample(req.body);
  // sample.save();
  // can save with the code above, but even easier way to do it with mongoose method, create (above)
});

// update stuff in the db
router.put('/sample/:id', function(req, res){
  res.send({type: 'PUT'});
});

// delete stuff from db
router.delete('/sample/:id', function(req, res){
  res.send({type: 'DELETE'});
});

module.exports = router;


// Note: Browser only works for GET requests, so will use Postman to test the other requests/routes.