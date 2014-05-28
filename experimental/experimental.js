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

Feature.create([{title: "The Hunt for Red October"}], function (err) {});
Venue.create([{name: "WHALE Lab Theater", address: {street : "26 E. Main Street", city: "Norton", state: "MA", zip: "02766"}}], function (err) {});
//Showing.create([{ showtime: new Date(), venue_id}]);



// var silence = new Kitten({ name: 'Silence' });
// silence.save(function (err) {
// 	console.log(silence.name); // 'Silence'
// });


mongoose.disconnect();