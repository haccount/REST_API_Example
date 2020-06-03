const express = require('express');
const router = express.Router();

// instead of app.get, we attach the methods to the route objecs set above,  the following:
// get a list of stuff from the db
router.get('/sample', function(req, res){
  res.send({type: 'GET'});
});

// add new stuff to the db
router.post('/sample', function(req, res){
  res.send({type: 'POST'});
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