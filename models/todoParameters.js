// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var todoParameterSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	todo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Todo'
		required: true
	},
	label: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var TodoParameters = mongoose.model('TodoParameter', todoParameterSchema);

// make this available to our Node applications
module.exports = TodoParameters;