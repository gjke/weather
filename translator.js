var express = require('express');
var app = express();
var util = require('util');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

var templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + '');

var request = require('request');
var urlutils = require('url');

app.get('/', function(req, res) {
  res.render('translator', {
    title: 'Заполните форму для перевода.'
  });
});

app.post('/', function(req, res) {
  if (!req.body.text || req.body.text == "") {
    res.render('translator', {
      title: "Выберите город"
    });
  } else {
    var url = urlutils.format({
      protocol: 'http',
      hostname: 'api.openweathermap.org',
      pathname: '/data/2.5/weather',
      query: {
        appid: '788e5243a8bed6df60e79a13643a3d4a',
        id: req.body.text
      }
    });
    console.log(url);
    //http://api.openweathermap.org/data/2.5/weather?id=524901&appid=788e5243a8bed6df60e79a13643a3d4a
    request.get({
      url: url,
      json: true
    }, function(error, response, json) {
      var data = {};

      if (error) {
        data = {
          title: "Не вижу такого города " + req.body.text,
          error: json.message
        }
      } else {
        data = {
          title: 'Погода в городе '  + util.inspect(json) + ' (смотри в консоли)'
        }
      }
      console.log(json);
      res.render('translator', data);

    });
  }
});

app.listen(8080);
console.log('Express server listening on port 8080');