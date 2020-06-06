const express = require('express');
const router = express.Router();
const Sample = require('../models/samples')

// get a list of stuff from the db
router.get('/samples', function(req, res, next){
  Sample.aggregate().near({
    near: {
      'type' : 'Point',
      'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
      maxDistance: 100000,
      spherical: true,
      distanceField: 'dis'
    }).then(function(samples){
      res.send(samples);
    });
});

// add new stuff to the db
router.post('/samples', function(req, res, next){
  Sample.create(req.body).then(function(sample){
    res.send(sample);
  }).catch(next); 
});

// update stuff in the db
router.put('/samples/:id', function(req, res, next){
  Sample.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Sample.findOne({_id: req.params.id}).then(function(sample){
      res.send(sample);
    })
  })
});

// delete stuff from db
router.delete('/samples/:id', function(req, res, next){
  Sample.findByIdAndRemove({_id: req.params.id}).then(function(sample){
    res.send(sample);
  })
});

module.exports = router;
