var express = require( 'express' );
var swig = require('swig');
var routes = require('./routes');

var app = express(); // creates an instance of an express application

swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');

app.use(function(req, res, next){
	console.log(req.method, req.url);
	console.log(req.method, " / ", res.statusCode)
	next();
})

app.use("/special", function(req, res, next){
	console.log("special req");
	next();
})

app.use('/', routes);


app.use(express.static(__dirname + '/public'));
// app.get("/", function(req, res){
// 	res.send("Welcome");
// 	// console.log(res.status());
// })

// app.get("/news", function(req, res){
// 	res.render('index', {
// 	title: "An Example",
// 	people: [{name: "Gandalf"},{name: "Frodo"}, {name: "Hermione"}]
// 	}, function (err, html){
// 	if(err) throw err;
// 	res.send(html);
// })

// })

app.listen(3000, function(){
	console.log("server listening");

})

