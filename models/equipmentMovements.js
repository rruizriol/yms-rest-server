// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentMovementSchema = new Schema({
	equipment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Equipment',
		required: true
	},
	fromLocation: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Location'
	},
	toLocation: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Location'
    },
    createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentMovements = mongoose.model('EquipmentMovement', equipmentMovementSchema);

// make this available to our Node applications
module.exports = EquipmentMovements;