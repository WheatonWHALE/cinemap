var showListings = 		[
							{title: 'Neighbors', theater: 'Sharon Cinemas 8', hour: [16, 19], minute: [35, 15] },
							{title: 'Neighbors', theater: 'Showcase Cinema de Lux Patriot Place', hour: [14, 15, 16, 18, 19, 21, 22], minute: [30, 55, 55, 35, 45, 20, 20] },
							{title: 'Rio 2', theater: 'Sharon Cinemas 8', hour: [16, 18], minute: [25, 35] },
							{title: 'Noah', theater: 'Showcase Cinemas North Attleboro', hour: [22, 22], minute: [15, 15]},
							{title: 'Frozen', theater: 'East Providence 10', hour: [12, 14, 17, 19, 21], minute: [40, 50, 5, 20, 30]}
                		];	

var mongoose   = require('mongoose');

// DB Connection
mongoose.connect("mongodb://barbara:stenger@ds033669.mongolab.com:33669/sandbox");

var Schema = mongoose.Schema;

var ShowingSchema = new Schema({
showtime: Date,
venue_id: {type: mongoose.Schema.Types.ObjectId, ref: 'theater'},
feature_id: {type: mongoose.Schema.Types.ObjectId, ref: 'movie'}
});

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

var Feature = mongoose.model('Feature', FeatureSchema);
var Venue = mongoose.model('Venue', VenueSchema);
var Showing = mongoose.model('Showing', ShowingSchema);

for (var i = 0; i < showListings.length; i++) {
	for (var x = 0; x < showListings[i].hour.length; x++) {
		addOneShowing(showListings[i], x);
	};
};


function addOneShowing(showing, x_index) {
		Venue.findOne({name: showing.theater}, "_id", function (err, venue) {
			if (err) {
				console.log(err);
			};
			Feature.findOne({title: showing.title}, "_id", function (er, feature) {
				if (er) {
					console.log(er);
				};
				console.log("Adding " + showing.title + " at " + showing.hour[x_index] + ":" + showing.minute[x_index]);
				// console.log("Err: " + err);
				// console.log("Er: " + er)
				// console.log("Showing: " + showing);	
				// console.log("Venue: " + venue + " looking for " + showing.theater);
				// console.log("Feature: " + feature);
				
				var foo = new Date(2014, 4, 22, showing.hour[x_index], showing.minute[x_index]);				
				var showtimes = new Showing({showtime: foo, venue_id: venue._id, feature_id: feature._id});
				showtimes.save(function(errr) {
					if (errr) {
						console.log("Errr: " + errr);
					}
				})
			
			});
		});	
};

// for (var e = 0; e < showListings.length; e++){
// 	Venue.findOne({name: showListings[e].theater}, "_id", function (err, venue) {
// 		Feature.findOne({title: showListings[e].title}, "_id", function (err, feature) {		
// 			console.log(venue);
			
// 			console.log(feature);
			
// 			var showtime = new Showing({showtime: Dates[e], venue_id: venue._id, feature_id: feature._id});
// 			showtime.save(function(err) {
// 				console.log(err);
// 			})
			
// 		});
// 	});
// };

console.log("Finished the program!");