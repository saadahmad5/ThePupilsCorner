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

//GET API
app.get("/api/book", function(req , res){
	var query = `   SELECT b.ItemId, b.ItemName, b.ISBN10, b.ISBN13, a.FirstName, a.LastName, p.Name, b.Cost
					FROM Book AS b, BookAuthor AS ba, Author AS a, BookPublisher AS bp, Publisher AS p
					WHERE a.AuthorID = ba.AuthorID AND
					b.ItemId = ba.ItemID AND
					p.PublisherID = bp.PublisherID AND
					bp.ItemID = b.ItemId					`;
	executeQuery (res, query);
});

app.get("/api/supply", function(req , res){
	if(req.body.ItemName)
		var itemName = req.body.ItemName;
	else
		var itemName = "";
	var query = `   SELECT os.ItemID, os.ItemName, os.Cost, st.TypeName
					FROM OfficeSupply AS os, SupplyType AS st
					WHERE os.OfficeSupplyTypeID = st.TypeID	AND
					os.ItemName LIKE '%` + itemName + `%'		`;
	//console.log("Query:", query);
	executeQuery (res, query);
});

app.get("/api/user", function(req , res){
	var query = `  	SELECT U.PersonID, U.FirstName, U.LastName
					FROM [User] AS U					`;
	executeQuery (res, query);
});

app.get("/api/employee", function(req , res){
	var query = `  	SELECT  E.PersonID, E.FirstName, E.LastName
					FROM Employee AS E				`;
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
	var query = "UPDATE Books SET ItemName='" + req.body.ItemName  +  "', ISBN13='" + req.body.ISBN13 + "', ISBN10='" + req.body.ISBN10 + 
				"', AuthorId='" + req.body.AuthorId + "', PublisherId='" + req.body.PublisherId + "' WHERE ItemId= " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

// DELETE API
 app.delete("/api/books/:id", function(req , res){
	var query = "DELETE FROM Books WHERE ItemId=" + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});
