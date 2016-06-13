// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var jobTypeSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	}

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var JobTypes = mongoose.model('JobType', jobTypeSchema);

// make this available to our Node applications
module.exports = JobTypes;