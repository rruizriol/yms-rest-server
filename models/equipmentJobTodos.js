// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentJobTodoSchema = new Schema({
	equipmentjob: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'EquipmentJob',
		required: true
	},
	todo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Todo',
		required: true
	},
	completedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	completedAt: {
		type: Date
    },
    comment: {
		type: String
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentJobTodos = mongoose.model('EquipmentJobTodo', equipmentJobTodoSchema);

// make this available to our Node applications
module.exports = EquipmentJobTodos;