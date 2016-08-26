var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//set up bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//define public directory
app.use(express.static(__dirname + '/public'));

//api routes
app.use('/api', require('./app_api/routes/blogRoutes.js'));

//app routes
app.use(require('./app_server/routes/main'));

//custom 404
app.use(function(req, res){
      res.status(404);
      res.send('404');
});

//custom 500
app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.send('500');
});

//listen on 3000
app.listen(3000, function(){
      console.log('Toto app started on http://localhost:' + 3000 + '; press ctrl-c to terminate.');
});
