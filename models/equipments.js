// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentSchema = new Schema({
	number: {
		type: String,
		required: true
	},
	company: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Company'
		required: true
	},
	equipmentStatus: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'EquipmentStatus'
	},
	equipmentClassification: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'EquipmentClassification'
    },
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Location'
    },
    inputDate: {
		type: Date,
	},
	outputDate: {
		type: Date,
	}

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Equipments = mongoose.model('Equipment', equipmentSchema);

// make this available to our Node applications
module.exports = Equipments;