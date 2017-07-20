var request = require('request');
var cheerio = require('cheerio');
var array =[];
var url = 'http://bridge4.qodeinteractive.com/about';
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //jquery get all hyperlinks
  $(links).each(function(i, link){
    array.push($(link).text() + ':\n  ' + $(link).attr('href'));
    console.log(array);
  });
  var b = array.shift()
    console.log(b);
});
