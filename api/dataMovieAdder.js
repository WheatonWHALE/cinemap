//function insertMovieInfo(){
var movieName = 			[
							'Neighbors', 
							'Godzilla', 
							'X-Men: Days of Future Past', 
							'Million Dollar Arm', 
							'The Amazing Spider-Man 2', 
							'Godzilla 3D', 
							'Blended', 
							'X-Men: Days of Future Past in 3D', 
							'The Other Women', 
							'Heaven is for Real', 
							'Rio 2',
							'Captain America: The Winter Soldier',
							'Legends of Oz: Dorthys Return',
							'Moms Night Out',
							'The Amazing Spider-Man 2 in 3D',
							'Divergent',
							'The Grand Budapest Hotel',
							'Godzilla: An IMAX 3D Experience',
							'The Lego Movie',
							'Brick Mansions',
							'Mr.Peabody & Sherman',
							'Bears',
							'Draft Day',
							'Noah',
							'Muppests Most Wanted',
							'Transcendence',
							'Non-Stop',
							'Ride Along',
							'Need for Speed',
							'300: Rise of an Empire',
							'Frozen'
							]



var TheaterAddress = 		[
                    		{name: 'Sharon Cinemas 8', address: ['700 South Main Street', 'Sharon', 'MA']},
                    		{name: 'Showcase Cinema de Lux Patriot Place', address: ['24 Patriot Place', 'Foxboro', 'MA']},
                    		{name: 'Showcase Cinemas North Attleboro', address: ['640 South Washington Street', 'North Attleboro', 'MA'] },
                    		{name: 'Regal Silver City Galleria 10', address: ['2 Galleria Mall Drive', 'Taunton', 'MA']},
                    		{name: 'Regal Swansea Stadium 12', address: ['207 Swansea Mall Drive', 'Swansea', 'MA']},
                    		{name: 'Showcase Cinemas Seekonk Route 6', address: ['100 Commerce Way', 'Seekonk', 'MA']},
                    		{name: 'Route One Cinema Pub', address: ['652 East Washington St.', 'North Attleboro', 'MA']},
                    		{name: 'East Providence 10', address: ['60 Newport Avenue', 'Rumford', 'RI']},
                    		{name: 'Showcase Cinema de Lux Randolph', address: ['73 Mazzeo Drive', 'Randolph', 'MA']} 
                    		]



var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://barbara:stenger@ds033669.mongolab.com:33669/sandbox");

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

var FeatureSchema = new Schema({
	title: String,
	external: String
});

var Venue = mongoose.model('Venue', VenueSchema);
var Feature = mongoose.model('Feature', FeatureSchema);

var movieList = [];

for ( var i = 0; i < movieName.length; i++ ){
    movieList.push({title: movieName[i], external: "N/A"});
};

Feature.create(movieList, function(err) {}); 

var TheaterArray = []

for (var x = 0; x < TheaterAddress.length; x++){
		var current_Theater = TheaterAddress[x];
		TheaterArray.push({name : current_Theater.name, address: {street : current_Theater.address[0], city : current_Theater.address[1], state : current_Theater.address[2]}});
};

Venue.create(TheaterArray, function(err) {});