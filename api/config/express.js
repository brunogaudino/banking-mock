var express = require('express');
var main = express();
var consign = require('consign');
var cors = require('cors');
var bodyParser = require('body-parser');

main.set('view engine', 'ejs');
main.set('views', './app/views/');
//app.use(express.static('../public'));
main.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
main.use(cors());
main.use(bodyParser.urlencoded({extended: true}));
main.use(bodyParser.json({ 'Content-type': 'application/json' }));

consign()
  .include('app/routes')
  .then('infra')
  .then('app/models')
  .then('app/controllers')
  .into(main);

module.exports = main;