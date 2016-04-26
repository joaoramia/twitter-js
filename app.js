var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use(function(req, res, next){
	console.log(req.method, req.url);
	console.log(req.method, " / ", res.statusCode)
	next();
})

app.use("/special", function(req, res, next){
	console.log("special req");
	next();
})

app.get("/", function(req, res){
	res.send("Welcome");
	// console.log(res.status());
})

app.get("/news", function(req, res){
	res.send("Good news");
})

app.listen(3000, function(){
	console.log("server listening");

})

