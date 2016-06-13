// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var jobTypeTodoSchema = new Schema({
	jobType: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'JobType'
	},
	todo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Todo'
		required: true
	}

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var JobTypeTodos = mongoose.model('JobTypeTodo', jobTypeTodoSchema);

// make this available to our Node applications
module.exports = JobTypeTodos;