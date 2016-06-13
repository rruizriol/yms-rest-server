// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var todoSchema = new Schema({
	name: {
		type: String,
		required: true
	}

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Todos = mongoose.model('Todo', todoSchema);

// make this available to our Node applications
module.exports = Todos;