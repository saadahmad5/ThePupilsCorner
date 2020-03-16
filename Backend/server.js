var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
console.log("App now running on port", port);
});

var dbConfig = {
    user:  "sa",
    password: "michigan",
	server: "localhost",
	database: "thepupilscorner"
};

var executeQuery = function(res, query){	
	sql.connect(dbConfig, function (err) {
		if (err) {   
			console.log("Error during connecting the database: " + err);
			console.log(dbConfig);
			res.send(err);
		}
		else {
			var request = new sql.Request();
			request.query(query, function (err, resp) {
				if (err) {
					console.log("Error querying the database: " + err);
					res.send(err);
				}
				else {
					res.send(resp);
				}
			});
		}
	});	
}

app.get("/", function(req , res){
	res.send('Saad');
});

app.get("/api/books", function(req , res){
	var query = "SELECT * FROM Books";
	executeQuery (res, query);
});

//POST API
 app.post("/api/books", function(req , res){
	var query = "INSERT INTO Books VALUES ( " + req.body.ItemID + ", '" + req.body.ItemName + "', '" +  req.body.ISBN13 + "', '"  + req.body.ISBN10 + "')";
	console.log("Query:", query);
	executeQuery (res, query);
});

//PUT API
 app.put("/api/books/:id", function(req , res){
	var query = "UPDATE Books SET ItemName= '" + req.body.ItemName  +  "' , ISBN13= '" + req.body.ISBN13 + "', ISBN10 = '" + req.body.ISBN10 + "'  WHERE ItemId= " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

// DELETE API
 app.delete("/api/books/:id", function(req , res){
	var query = "DELETE FROM Books WHERE ItemId=" + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});
