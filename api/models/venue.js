var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
// Consider adding:
//   open date, close date, type of venue
//   owner, chain
//   seating capacity/architect
//   number of screens

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