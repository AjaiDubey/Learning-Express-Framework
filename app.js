var express= require("express");
var app= express();

app.get("/", function(req, res){
	res.send("Hi there! tulli!");
});

app.get("/Dubey-Family", function(req, res){
	console.log("Someone made a request to /Dubey-Family");
	res.send("Raja -> Ajai -> ?")
})

app.listen(3000, function(){
	console.log("Server has started!!");
});