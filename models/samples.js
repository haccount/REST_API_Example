const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema will set how our data will be structured

// reference from GEOJSON.org
  // "geometry": {
  //   "type": "Point",
  //   "coordinates": [125.6, 10.1]
  // },

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere" // type of map
  }
});

// create sample Schema & model
const SampleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

// create our model here by setting it equal to model('name of collection')
// mongoose will pluralize 'sample' for us by creating a noSQL table/collection of 'samples'
// pass in SampleSchema so that the objects within the collection will be structured based on the schema.
// export the model so we can use in other files
const Sample = mongoose.model('sample', SampleSchema)

module.exports = Sample;