const mongoose = require(mongoose);
const Schema = mongoose.Schema;
// Schema will set how our data will be structured

// create sample Schema & model
const SampleSchema = new Schema ({
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
  }
  // add in geo location
});

// create our model here by setting it equal to model('name of collection')
// mongoose will pluralize 'sample' for us by creating a noSQL table/collection of 'samples'
// pass in SampleSchema so that the objects within the collection will be structured based on the schema.
// export the model so we can use in other files
const Sample = mongoose.model('sample', SampleSchema)

module.exports = Sample;