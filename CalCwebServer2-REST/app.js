
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
var calculator=require('./modules/calculator');


// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/multiplicar', function(req, res) {
	var a=req.param('a');
	var b=req.param('b');
	var multiplicacion= calculator.multiplicar(a,b);
		
	res.send(multiplicacion);
});

app.get('/dividir', function(req, res) {
	var a=req.param('a');
	var b=req.param('b');
	var division= calculator.dividir(a,b);
		
	res.send(division);
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Servidor funcionando por el puerto ' + app.get('port'));
});
