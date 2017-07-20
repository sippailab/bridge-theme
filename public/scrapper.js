var request = require('request');
var cheerio = require('cheerio');
var array=[];
var url = 'https://www.zomato.com/puducherry/directory/';
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a');
  $(links).each(function(i, link){
    array.push($(link).text() + ':\n  ' + $(link).attr('href'));
  });
});
