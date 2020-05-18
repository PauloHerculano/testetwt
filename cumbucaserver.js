const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

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

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'rsR0TooAJf4l9jU2Nyjy1dqcY',
  consumer_secret: 'GEYUJYbk7gDCrVfRYxksxh9l4ZVaWB2TvyC3H2YHDYiQ2hZmzr',
  access_token_key: '1201664563500011521-QtBqkSeJe4WZcb1Q6XFIZH0oSg92Wj',
  access_token_secret: 'XRMIAtESEjI91M4w7xOshmY4o375mhJemwfh7o2eSt1iO'
});

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
router.get("/search/:tweet", function (req, res) {
 client.get('search/tweets', {q: req.params.tweet, count: 50}, function(error, tweets, response) {
   console.log(tweets);
  });
})
