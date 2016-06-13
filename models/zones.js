// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var zoneSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Location'
		required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Zones = mongoose.model('Zone', zoneSchema);

// make this available to our Node applications
module.exports = Zones;