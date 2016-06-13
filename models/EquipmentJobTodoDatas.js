// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentJobTodoDataSchema = new Schema({
	equipmentjobTodo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'EquipmentjobTodo',
		required: true
	},
	todoparameter: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'TodoParameter',
		required: true
	},
	Value: {
		type: String
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentJobTodoDatas = mongoose.model('EquipmentJobTodoData', equipmentJobTodoDataSchema);

// make this available to our Node applications
module.exports = equipmentJobTodoDatas;