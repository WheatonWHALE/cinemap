var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeatureSchema = new Schema({
	title: String,
	external: String
});

module.exports = mongoose.model('Feature', FeatureSchema);