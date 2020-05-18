const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var content;
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

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

app.get('search/tweets', content,searchedData);

 function searchedData(err, data, response) {
  res.send(data);
  console.log(data);
}
