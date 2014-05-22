var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShowingSchema = new Schema({
	showtime: Date,
	venue_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'},
	feature_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Feature'}
});

module.exports = mongoose.model('Showing', ShowingSchema);