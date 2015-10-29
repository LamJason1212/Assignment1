var mongoose = require('mongoose');

var PopulationSchema = new mongoose.Schema({
    AGE: String,
    POPESTIMATE2014: String
},
{
    collection: 'population'
});

mongoose.model('PopulationData', PopulationSchema);