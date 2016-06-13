// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentCheckSchema = new Schema({
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
    temperature: {
		type: Number
    },
    fuelLevel: {
		type:String
    },
    comment: {
		type:String
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentChecks = mongoose.model('EquipmentCheck', equipmentCheckSchema);

// make this available to our Node applications
module.exports = EquipmentChecks;