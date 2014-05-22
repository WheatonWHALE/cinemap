var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
	name: String,
	address: {
		street: String,
		city: String,
		state: String,
		zip: Number
	},
	external: String
});

module.exports = mongoose.model('Venue', VenueSchema);