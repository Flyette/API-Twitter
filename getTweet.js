var Twitter = require('twitter-node-client').Twitter;
var express = require('express');
var cors = require('express-cors');
var app = express();
//Get this data from your twitter apps dashboard
    var config = {
    "consumerKey": "vKIaysRNtXw5VxpGV3NlcAI6N",
    "consumerSecret": "L7uvXAJJSlyAXn1OnjAeIrSAArfRPNKk3aCbspDt1vMfTi3FVy",
    "accessToken": "4503881386-PvJFHiNRQPhyEVjlzAE9dNzVNRNuA2OHr0Rwiti",
    "accessTokenSecret": "0DuSSRasU42C82FhIQZI60SU8of7JJT9QGLxnNRmCV3bo",
}


 app.use(cors({
    allowedOrigins: ['*/*', 'localhost:3001']
 }));

var tweets;
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));

};
var success = function (data) {
    console.log('Data [%s]', data);
    console.log(typeof data);
    tweets = JSON.parse(data);
    console.log(typeof tweets);
};

var twitter = new Twitter(config);
tweets = twitter.getMentionsTimeline({ count: '10'}, error, success);
    

app.get('/', function (req, res) {
   res.json(tweets[0]);
});

 
//Callback functions




app.listen(3000, function () {
    console.log('message dans le terminal!');
});
