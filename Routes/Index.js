var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PopulationData = mongoose.model('PopulationData');

/* Get home page. */
router.get('/', function(req, res, next){
    res.render('index', {title: 'Express'});
});

/* Get data with /data. */
router.get('/data', function(req, res, next){
    PopulationData.find({AGE: {$gt: 17, $lt: 22}}, {_id: 0, AGE: 1, POPESTIMATE2014: 1}, function(err, data){
        if(err){ return next(err);}
        res.json(data);
    });
});

module.exports = router;