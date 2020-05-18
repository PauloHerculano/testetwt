const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var tweet;


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUSH, LISTEN"
    );
    next();
  });

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

app.get("/search/:tweet", function (req, res) {
  client.get('search/tweets', {q: req.params.tweet, count: 50}, function(error, tweets, response) {
    res.status(201).json({
      message: 'Tweets',
      tweets: tweets
    });
  });
