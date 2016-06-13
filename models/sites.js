// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var siteSchema = new Schema({

	name: {
		type: String,
		required: true
    },
    company: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Company',
		required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Sites = mongoose.model('Site', siteSchema);

// make this available to our Node applications
module.exports = Sites;