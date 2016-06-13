// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentStatusSchema = new Schema({
	name: {
		type: String,
		required: true
	}

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentStatus = mongoose.model('EquipmentStatus', equipmentStatusSchema);

// make this available to our Node applications
module.exports = EquipmentStatus;