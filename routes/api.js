const express = require('express');
const router = express.Router();
const Sample = require('../models/samples')

// get a list of stuff from the db
router.get('/sample', function(req, res, next){
  res.send({type: 'GET'});
});

// add new stuff to the db
router.post('/sample', function(req, res, next){
  Sample.create(req.body).then(function(sample){
    res.send(sample);
  }).catch(next); 
});
// pass in 3rd parameter next function, and add function in .catch that fires if there's an error

// update stuff in the db
router.put('/sample/:id', function(req, res, next){
  res.send({type: 'PUT'});
});

// delete stuff from db
router.delete('/sample/:id', function(req, res, next){
  Sample.findByIdAndRemove({_id: req.params.id}).then(function(sample){
    res.send(sample);
  })
  // res.send({type: 'DELETE'});
});

module.exports = router;
