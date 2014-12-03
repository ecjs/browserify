var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/git', function(req, res) {
  request({
    uri: 'https://api.github.com/users/' + req.body.user,
    method: 'GET',
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    headers: {
      'User-agent': 'request'
    }
  }, function(error, response, body) {
    var userInfo = JSON.parse(body);
    res.send(userInfo.avatar_url);
  });
});

app.listen(3000);
