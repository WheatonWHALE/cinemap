var mongoose   = require('mongoose');

// DB Connection
mongoose.connect("mongodb://barbara:stenger@ds033669.mongolab.com:33669/sandbox");
var Schema = mongoose.Schema;


var FeatureSchema = new Schema({
	title: String,
	external: String
});

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

var ShowingSchema = new Schema({
	showtime: Date,
	venue_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'},
	feature_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Feature'}
});

var Feature = mongoose.model('Feature', FeatureSchema);
var Venue = mongoose.model('Venue', VenueSchema);
var Showing = mongoose.model('Showing', ShowingSchema);


var show = {date: new Date(), venue: "WHALE Lab Theater", title: "The Hunt for Red October"};

Venue.findOne({name: show.venue}, "_id", function (err, venue) {
	Feature.findOne({title: show.title}, "_id", function (err, feature) {
		console.log(venue);
		console.log(feature);
		Showing.create({showtime: show.date, venue_id: venue._id, feature_id: feature._id}, function(err) {});
	});
});

// Showing.create([])

// Venue.findOne({name: "WHALE Lab Theater"}, "name address", function (err, venue) {
// 	console.log(venue.address);
// });