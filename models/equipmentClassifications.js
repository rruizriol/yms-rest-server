// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentClassificationSchemaSchema = new Schema({
	name: {
		type: String,
		required: true
	},
    equipmentType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EquipmentType',
        required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentTypes = mongoose.model('equipmentClassification', equipmentClassificationSchema);

// make this available to our Node applications
module.exports = EquipmentClassifications;