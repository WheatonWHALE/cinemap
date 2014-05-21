var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShowingSchema = new Schema({
	showtime: Date,
	venue_id: Schema.ObjectId,
	feature_id: Schema.ObjectId
});

module.exports = mongoose.model('showing', ShowingSchema);