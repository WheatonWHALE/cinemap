//function insertMovieInfo(){
var movieName = 			[
							'Neighbors', 
							'Godzilla', 
							'X-Men: Dyas of Future Past', 
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

// var NeighborsTheaters = 	[
// 							{'Sharon Cinemas 8': ['4:35'‎ , '7:15pm'‎]}, 
// 							{'Showcase Cinema de Lux Patriot Place': ['‎2:30' , '3:55‎' , ‎'4:55‎' , ‎'6:35‎' , ‎'7:45‎' , ‎'9:20‎', ‎'10:20pm‎']}, 
// 							{'Showcase Cinemas North Attleboro': [ ‎2:50‎  ‎5:15‎  ‎7:40‎  ‎10:15pm‎]}, 
// 							{'Regal Silver City Galleria 10': [1:35‎  ‎4:35‎  ‎7:30‎  ‎9:55pm‎]}, 
// 							{'Regal Swansea Stadium 12': [1:50‎  ‎4:50‎  ‎7:50‎  ‎10:40pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [‎2:25‎  ‎4:50‎  ‎7:25‎  ‎9:55pm‎]}
// 							]

// var GodzillaTheaters = 		[
// 							{'Sharon Cinemas 8': [4:15‎  ‎6:50pm‎]}, 
// 							{'Showcase Cinema de Lux Patriot Place': [1:00‎  ‎1:30‎  ‎3:50‎  ‎4:20‎  ‎6:40‎  ‎7:10‎  ‎9:35‎  ‎10:00pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [1:00‎  ‎1:30‎  ‎3:50‎  ‎4:20‎  ‎6:40‎  ‎7:10‎  ‎9:35‎  ‎10:00pm‎]}, 
// 							{'Regal Silver City Galleria 10': [1:30‎  ‎4:25‎  ‎7:40‎  ‎10:30pm‎]}, 
// 							{'Regal Swansea Stadium 12': [1:00‎  ‎1:15‎  ‎4:00‎  ‎7:10‎  ‎7:25‎  ‎10:20pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [1:15‎  ‎1:45‎  ‎4:15‎  ‎4:45‎  ‎7:15‎  ‎7:45‎  ‎10:20pm‎]}
//                    			]

// var XMenTheaters = 			[
// 							{'Sharon Cinemas 8': [‎10:00pm‎]}, 
// 							{'Showcase Cinema de Lux Patriot Place': [10:15pm‎]}, 
// 							{'Regal Silver City Galleria 10': [10:15pm‎]}, 
// 							{'Regal Swansea Stadium 12': [10:00pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [10:15pm‎]}
//                				]

// var MillionTheaters = 		[
// 							{'Sharon Cinemas 8': [‎4:00‎  ‎6:45pm‎]}, 
// 							{'Showcase Cinema de Lux Patriot Place': [12:35‎  ‎3:35‎  ‎6:55pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [1:00‎  ‎4:00‎  ‎7:00‎  ‎10:05pm‎]}, 
// 							{'Regal Silver City Galleria 10': [1:10‎  ‎4:10‎  ‎7:10‎  ‎10:00pm‎]}, 
// 							{'Regal Swansea Stadium 12': [‎1:35‎  ‎4:25‎  ‎7:15‎  ‎10:10pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [12:30‎  ‎4:05‎  ‎7:10‎  ‎10:00pm‎]}
// 				  			]

// var SpiderMan2Theaters = 	[
// 				    		{'Sharon Cinemas 8': [3:50‎  ‎6:40pm‎]}, 
// 				    		{'Showcase Cinema de Lux Patriot Place': [12:05‎  ‎12:40‎  ‎3:10‎  ‎3:45‎  ‎6:30‎  ‎9:40pm‎]}, 
// 				    		{'Showcase Cinemas North Attleboro': [1:10‎  ‎4:20‎  ‎6:30‎  ‎7:35‎  ‎9:40pm]}, 
// 				    		{'Regal Silver City Galleria 10': [3:45‎  ‎7:05‎  ‎10:15pm‎]}, 
// 				    		{'Regal Swansea Stadium 12': [1:25‎  ‎4:10‎  ‎4:45‎  ‎8:00pm‎]}, 
// 				    		{'Showcase Cinemas Seekonk Route 6': [‎12:15‎  ‎3:20‎  ‎6:30‎  ‎9:45pm‎]}
// 					 		]

// var Godzilla3DTheaters = 	[
// 							{'Showcase Cinema de Lux Patriot Place': [11:15am‎  ‎12:30‎  ‎2:00‎  ‎3:20‎  ‎4:50‎  ‎6:10‎  ‎7:40‎  ‎9:05pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [12:45‎  ‎3:45‎  ‎6:45‎  ‎9:50pm‎]}, 
// 							{'Regal Silver City Galleria 10': [1:00‎  ‎3:55‎  ‎7:20‎  ‎10:00pm‎]}, 
// 							{'Regal Swansea Stadium 12': [1:45‎  ‎4:15‎  ‎4:40‎  ‎7:40‎  ‎10:05‎  ‎10:35pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6':[12:45‎  ‎3:45‎  ‎6:45‎  ‎9:50pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [11:30am‎  ‎2:25‎  ‎5:10‎  ‎8:05pm‎]}
// 					 		]

// var BlendedTheaters =   	[
// 				    		{'Sharon Cinemas 8': [7:00pm‎]}, 
// 				    		{'Showcase Cinema de Lux Patriot Place': [7:00‎  ‎9:30pm‎]}, 
// 				    		{'Showcase Cinemas North Attleboro': [7:00pm‎]}, 
// 				    		{'Regal Silver City Galleria 10': [7:00‎  ‎9:30pm‎]}, 
// 				    		{'Regal Swansea Stadium 12': [7:00‎  ‎10:10pm‎]}, 
// 				    		{'Showcase Cinemas Seekonk Route 6': [7:00pm‎]}
//                     		]

// var XMen3DTheaters = 		[
// 							{'Showcase Cinema de Lux Patriot Place': [10:00pm‎]}, 
// 							{'Regal Silver City Galleria 10': [10:00pm‎]}, 
// 							{'Regal Swansea Stadium 12': [10:20pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [‎10:00pm‎]}
// 				 			]

// var TheOtherTheaters = 		[
// 							{'Sharon Cinemas 8': [4:15‎  ‎7:10pm‎]}, 
// 							{'Showcase Cinema de Lux Patriot Place': [1:15‎  ‎4:00‎  ‎7:00pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [1:40‎  ‎4:35‎  ‎7:20‎  ‎9:55pm‎]}, 
// 							{'Regal Silver City Galleria 10': [1:20‎  ‎4:15‎  ‎6:55‎  ‎9:40pm]}, 
// 							{'Regal Swansea Stadium 12': [1:20‎  ‎4:20‎  ‎7:05‎  ‎9:50pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [12:50‎  ‎4:25‎  ‎7:20‎  ‎10:10pm‎]}
// 				   			]

// var HeavenTheaters = 		[
// 							{'Showcase Cinemas North Attleboro': [‎1:30‎  ‎4:10‎  ‎7:10‎  ‎10:00pm‎]}, 
// 							{'Regal Silver City Galleria 10': [‎1:10‎  ‎4:25‎  ‎6:45‎  ‎9:10pm‎]}, 
// 							{'Regal Swansea Stadium 12': [1:30‎  ‎4:30‎  ‎7:00‎  ‎9:35pm]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [‎12:40‎  ‎4:10‎  ‎6:55‎  ‎9:40pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [‎11:35am‎  ‎2:00‎  ‎4:20‎  ‎6:50‎  ‎9:20pm‎]}
// 				 			]

// var Rio2Theaters = 			[
// 				    		{'Sharon Cinemas 8': [4:25‎  ‎6:35pm‎]}, 
// 				    		{'Showcase Cinema de Lux Patriot Place': [11:25am‎  ‎1:55‎  ‎4:25pm‎]}, 
// 				    		{'Showcase Cinemas North Attleboro': [1:05‎  ‎3:50pm‎]},
// 				    		{'Regal Silver City Galleria 10': [1:00‎  ‎3:30‎  ‎7:00pm‎]}, 
// 				    		{'Regal Swansea Stadium 12': [1:05‎  ‎3:45‎  ‎6:45pm‎]}, 
// 				    		{'Showcase Cinema de Lux Randolph': [12:55‎  ‎4:00pm‎]}
//                				]

// var CaptainTheaters = 		[
// 							{'Showcase Cinema de Lux Patriot Place': [‎12:00‎  ‎3:25‎  ‎6:45‎  ‎9:55pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [7:05‎  ‎10:05pm‎]}, 
// 							{' Regal Silver City Galleria 10': [1:05‎  ‎3:35‎  ‎6:50pm‎]}, 
// 							{'Regal Swansea Stadium 12': [12:55‎  ‎4:05‎  ‎7:20‎  ‎10:30pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [‎10:05pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [12:40‎  ‎3:45‎  ‎9:55pm‎]}
//                   			]

// var LegendsTheaters = 		[
// 							{'Showcase Cinema de Lux Patriot Place': [11:55am‎  ‎2:15‎  ‎4:45pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [12:15‎  ‎2:30‎  ‎4:40pm‎]}, 
// 							{' Regal Silver City Galleria 10': [1:25‎  ‎4:30pm‎]}, 
// 							{'Regal Swansea Stadium 12': [1:10‎  ‎3:30pm]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [12:10‎  ‎2:30‎  ‎4:55pm]}, 
// 							{'Showcase Cinema de Lux Randolph': [12:20‎  ‎2:30‎  ‎4:45pm]}
//                   			]

// var NightTheraters = 		[
// 							{'Showcase Cinema de Lux Patriot Place': [‎1:45‎  ‎4:30‎  ‎7:15‎  ‎9:50pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [11:05am‎  ‎1:30‎  ‎4:05‎  ‎6:30‎  ‎9:10pm‎]}
//                  			]

// var SpiderMan3DTheaters = 	[
// 							{'Showcase Cinema de Lux Patriot Place': [7:05‎  ‎10:10pm‎]}, 
// 							{'Regal Silver City Galleria 10': [1:15pm‎]}, 
// 							{'Regal Swansea Stadium 12': [‎12:50pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [7:10‎  ‎10:15pm‎]}
//                       		]

// var DivergentTheaters = 	[
// 							{'Route One Cinema Pub': [‎8:05pm‎]}
//                     		]

// var TheGrandTheaters = 		[
// 							{'Sharon Cinemas 8': [‎4:20pm‎]}, 
// 							{'Showcase Cinemas North Attleboro': [12:50‎  ‎4:05‎  ‎6:55‎  ‎9:35pm‎]}, 
// 							{'Showcase Cinemas Seekonk Route 6': [6:50‎  ‎9:30pm‎]}
//                    			]

// var GodzillaIMAXTheaters = 	[
// 					    	{'Showcase Cinema de Lux Randolph': [‎12:35‎  ‎3:40‎  ‎6:35‎  ‎9:30pm‎]}
//                        		]

// var LegoTheaters = 			[
// 							{'East Providence 10': [12:25‎  ‎2:35‎  ‎4:45‎  ‎6:55‎  ‎9:05pm‎]}
//                				]

// var BrickTheaters = 		[
// 							{'Route One Cinema Pub': [8:35pm‎]}, 
// 							{'Showcase Cinema de Lux Randolph': [‎7:15pm‎]}
//                 			]

// var ShermanTheaters = 		[
// 							{'East Providence 10': [12:10‎  ‎2:30‎  ‎4:40‎  ‎6:50‎  ‎8:55pm‎]}
//                   			]

//    var BearsTheaters = 		[
//                    			{'Showcase Cinemas North Attleboro': [12:30‎  ‎2:40‎  ‎5:00pm‎]}

//                    			]

//    var DraftTheaters = 		[
// 							{'Route One Cinema Pub': [6:00pm‎]}, 
// 							{'Showcase Cinema de Lux Patriot Place': [‎7:25‎  ‎10:00pm‎]}
//                    			]

//    var NoahTheaters = 			[
//    							{'Showcase Cinemas North Attleboro': [10:10pm‎]}
//                   				]

//    var MuppestsTheaters = 		[
//    							{'Route One Cinema Pub': [‎4:15pm‎]}
//                       			]

//    var TranscendenceTheaters = [
//    					        {'Route One Cinema Pub': [6:25pm‎]}, 
//    					        {'East Providence 10': [12:30‎  ‎3:00‎  ‎6:30‎  ‎9:10pm‎]}
//                            	]

//    var NonTheaters = 			[
//    							{'East Providence 10': [12:15‎  ‎2:35‎  ‎4:55‎  ‎7:15‎  ‎9:35pm‎]}
//                  				]

//    var RideTheaters = 			[
//    							{'East Providence 10': [1:00‎  ‎3:10‎  ‎5:20‎  ‎7:25‎  ‎9:40pm‎]}
//                   				]

//    var NeedTheaters = 			[
//    							{'East Providence 10': [6:20‎  ‎9:05pm‎]}
//                   				]

//    var threeTheaters = 		[
//    							{'East Providence 10': [12:05‎  ‎2:15‎  ‎4:25‎  ‎6:35‎  ‎8:45pm‎]}
//                    			]

//    var FrozenTheaters = 		[
//    							{'East Providence 10': [‎12:40‎  ‎2:50‎  ‎5:05‎  ‎7:20‎  ‎9:30pm‎]}
//                     			]
//    var Theaters = 				[
//    							'Sharon Cinemas 8', 'Showcase Cinema de Lux Patriot Place', 'Showcase Cinemas North Attleboro',
//    							'Regal Silver City Galleria 10', 'Regal Swansea Stadium 12', 'Showcase Cinemas Seekonk Route 6',
//    							'Route One Cinema Pub', 'East Providence 10', 'Showcase Cinema de Lux Randolph'
//    							]

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

// var TheaterList = 			[
// 							NeighborsTheaters, 
// 							GodzillaTheaters,
// 							XMenTheaters,
// 							MillionTheaters,
// 							SpiderMan2Theaters,
// 							Godzilla3DTheaters,
// 							BlendedTheaters,
// 							XMen3DTheaters,
// 							TheOtherTheaters,
// 							HeavenTheaters, 
// 							Rio2Theaters,
// 							CaptainTheaters,
// 							LegendsTheaters,
// 							NightTheraters,
// 							SpiderMan3DTheaters,
// 							DivergentTheaters,
// 							TheGrandTheaters,
// 							GodzillaIMAXTheaters,
// 							LegoTheaters,
// 							BrickTheaters,
// 							ShermanTheaters,
// 							BearsTheaters,
// 							DraftTheaters,
// 							NoahTheaters,
// 							MuppestsTheaters,
// 							TranscendenceTheaters,
// 							NonTheaters,
// 							RideTheaters,
// 							NeedTheaters,
// 							threeTheaters,
// 							FrozenTheaters
// 							]

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

var ShowingSchema = new Schema({
showtime: Date,
venue_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'},
feature_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Feature'}
});

var FeatureSchema = new Schema({
	title: String,
	external: String
});

var theater = mongoose.model('theater', VenueSchema);
var movie = mongoose.model('movie', FeatureSchema);

var movieList = [];

for ( var i = 0; i < movieName.length; i++ ){
    movieList.push({title: movieName[i], external: "N/A"});
};

movie.create(movieList, function(err) {}); 

var TheaterArray = []

for (var x = 0; x < TheaterAddress.length; x++){
		var current_Theater = TheaterAddress[x];
		TheaterArray.push({name : current_Theater.name, address: {street : current_Theater.address[0], city : current_Theater.address[1], state : current_Theater.address[2]}});
};

theater.create(TheaterArray, function(err) {});

 mongoose.disconnect();

//}
