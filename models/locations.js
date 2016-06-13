// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var locationSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	zone: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Zone'
		required: true
    },
    locationType: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'LocationType',
		required: true
    },
    locationStatus: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'LocationStatus',
		required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Locations = mongoose.model('Location', locationSchema);

// make this available to our Node applications
module.exports = Locations;