console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var content = 'https://twitter.com/minsaude';
var params = { 
q: content,
 count: 100 
}

T.get('/tweets', params,searchedData);

 function searchedData(err, data, response) {
  console.log(data);
}
