// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var equipmentJobSchema = new Schema({
	description: {
		type: String,
		required: true
	},
	equipment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Equipment',
		required: true
	},
	jobType: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'JobType'
	},
    createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
    },
    completedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
    },
    startedAt: {
		type: Date
    },
    completedAt: {
		type: Date
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var EquipmentJobs = mongoose.model('EquipmentJob', equipmentJobSchema);

// make this available to our Node applications
module.exports = EquipmentJobs;