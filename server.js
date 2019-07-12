var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var hbs = require('express-handlebars');
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

var port = process.env.PORT || 3002;
app.listen(port);
