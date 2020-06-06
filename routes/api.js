const express = require('express');
const router = express.Router();
const Sample = require('../models/samples')

// get a list of stuff from the db
router.get('/samples', function(req, res, next){
  // res.send({type: 'GET'});
  /* Sample.find({}).then(function(samples){
    res.send(samples);
  }); */
  // add on URL parameters
    // Sample.geoNear(
  //   {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
  //   {maxDistance: 100000, spherical: true}
  // ).then(function(samples){
  //   res.send(samples);
  // });

  // geoNear function in mongoose apparently deprecated, so used the following...
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
// pass in 3rd parameter next function, and add function in .catch that fires if there's an error

// update stuff in the db
router.put('/samples/:id', function(req, res, next){
  Sample.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    // re-find the sample and send it back (otherwise it may return the old 'sample')
    Sample.findOne({_id: req.params.id}).then(function(sample){
      res.send(sample);
    })
  })
  // res.send({type: 'PUT'});
});

// delete stuff from db
router.delete('/samples/:id', function(req, res, next){
  Sample.findByIdAndRemove({_id: req.params.id}).then(function(sample){
    res.send(sample);
  })
  // res.send({type: 'DELETE'});
});

module.exports = router;
