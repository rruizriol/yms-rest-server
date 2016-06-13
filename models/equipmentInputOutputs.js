// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentInputOutputSchema = new Schema({
	equipment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Equipment',
		required: true
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
    },
    driverName: {
		type: String
    },
    truckingCompany: {
		type: String
    },
    inputOrOutput: {
		type: Boolean
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentInputOutputs = mongoose.model('EquipmentInputOutput', equipmentInputOutputSchema);

// make this available to our Node applications
module.exports = EquipmentInputOutputs;