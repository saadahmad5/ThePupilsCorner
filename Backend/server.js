var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
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

////////////////////////////////////////////////////////////////////////////////////////
// To populate the tables for search engine
app.get("/api/book", function(req , res){
	var query = `   SELECT DISTINCT b2.ItemId, b2.ItemName, b2.ISBN10, b2.ISBN13,
							STUFF((SELECT ', ' + CONCAT(FirstName, ' ', LastName)
							FROM Author a1, BookAuthor ba1, Book b1
							WHERE A1.AuthorID = ba1.AuthorID AND b1.ItemId = ba1.ItemID AND b1.ItemID = b2.ItemID
							FOR XML PATH('')), 1, 1, '') AS 'Author',
							p.[Name], b2.Cost, b2.Quantity
				FROM Book AS b2, BookAuthor AS ba2, Author AS a2, Publisher as p, BookPublisher AS bp
				WHERE	b2.ItemId = ba2.ItemID AND 
					ba2.AuthorID = a2.AuthorID AND 
					p.PublisherID = bp.PublisherID AND
					bp.ItemID = b2.ItemId					`;
	executeQuery (res, query);
});


app.get("/api/supply", function(req , res){
	var query = `   SELECT os.ItemID, os.ItemName, os.Cost, os.Quantity, st.TypeID, st.TypeName
					FROM OfficeSupply AS os, SupplyType AS st
					WHERE os.OfficeSupplyTypeID = st.TypeID		`;
	//console.log("Query:", query);
	executeQuery (res, query);
});

app.get("/api/author", function(req , res){
	var query = `   SELECT [AuthorID]
						,[FirstName]
						,[LastName]
					FROM [Author]		`;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.get("/api/publisher", function(req, res){
	var query = `SELECT PublisherID, 
						Name, 
						Street, 
						City, 
						State, 
						Country, 
						PhoneNumber
				FROM [ThePupilsCorner].[dbo].[Publisher]`;
	console.log("Query: ", query);
	executeQuery(res, query);
})

////////////////////////////////////////////////////////////////////////////////////////
// To populate the drop downs in Book/Supply Favorites. Can be reused for Rental/ Purchase

app.get("/api/user", function(req , res){
	var query = `  	SELECT U.PersonID, U.FirstName, U.LastName
					FROM [User] AS U					`;
	executeQuery (res, query);
});

////////////////////////////////////////////////////////////////////////////////////////
// To populate the drop downs in Login page for employees

app.get("/api/employee", function(req , res){
	var query = `  	SELECT  E.PersonID, E.FirstName, E.LastName
					FROM Employee AS E		`;
	executeQuery (res, query);
});

//////////////////////////////////////////////////////////////////////////////////////////
// For Phone numbers in employee portal

app.get("/api/employeephone/:id", function(req , res){
	var id = req.params.id;
	var query = `  	SELECT PersonID, PhoneNumber
					FROM Employee AS e, EmployeePhone AS ep
					WHERE e.PersonID = ep.EmployeeID AND ep.EmployeeID = ` + id;
	//console.log(query);
	executeQuery (res, query);
});

////////////////////////////////////////////////////////////////////////////////////////
// For employee portal view page

app.get("/api/employee/:id", function(req , res){
	var id = req.params.id;
	var query = `  	SELECT E.PersonID, E.FirstName, E.LastName, E.Email, E.SSN, E.Street, E.City, E.State, E.Country, E.JobTypeID, J.JobTypeName
					FROM Employee AS E, JobType AS J
					WHERE E.JobTypeID = J.JobTypeID AND E.PersonID = ` + id;
	//console.log(query);
	executeQuery (res, query);
});

app.get("/api/author/:id", function(req , res){
	var id = req.params.id;
	var query = `  	SELECT AuthorID
							,FirstName
							,LastName
							FROM [Author]
							WHERE AuthorID = ` + id;
	//console.log(query);
	executeQuery (res, query);
});


app.get("/api/publisher/:id", function(req , res){
	var id = req.params.id;
	var query = `  	SELECT PublisherID,
							Name, 
							Street, 
							City, 
							State, 
							Country, 
							PhoneNumber
							FROM [Publisher]
							WHERE PublisherID = ` + id;
	//console.log(query);
	executeQuery (res, query);
});

app.get("/api/book/:id", function(req , res){
	var id = req.params.id;
	var query = `SELECT ItemName,
						b.ItemId,
						Cost,
						Quantity,
						ISBN13,
						ISBN10,
						bp.PublisherID,
						bp.Date
						FROM [Book] b, [BookPublisher] bp
						WHERE b.ItemId = ` + id + ` AND b.ItemId = bp.ItemID`;
	console.log(query);
	executeQuery (res, query);
});

app.get("/api/addedbook/:itemName", function(req , res){
	var itemName = req.params.itemName;
	var query = `  	SELECT ItemName,
							ItemId,
							Cost,
							Quantity,
							ISBN13,
							ISBN10
							FROM [Book]
							WHERE ItemName = '` + itemName + `'`;
	console.log(query);
	executeQuery (res, query);
});

app.get("/api/bookauthor/:id", function(req, res){
	var id = req.params.id;
	var query = `SELECT b.AuthorID,
						b.BookAuthorID, 
						FirstName,
						LastName,
						ItemID
				FROM [BookAuthor] b, [Author] a
				WHERE b.ItemID =` + id + ` AND b.AuthorID = a.AuthorID`;
	console.log(query);
	executeQuery (res, query);

});
////////////////////////////////////////////////////////////////////////////////////////
// To populate the drop downs in Book/Supply Favorites. Can be reused for Rental/ Purchase
app.get("/api/books", function(req , res){
	var query = `   SELECT b.ItemId, b.ItemName
					FROM Book AS b					`;
	executeQuery (res, query);
});

app.get("/api/supplys", function(req , res){
	var query = `   SELECT os.ItemId, os.ItemName
					FROM OfficeSupply AS os					`;
	executeQuery (res, query);
});


/////////////////////////////////////////////////////////////////////////////////////////
// FOR Admin Reports
app.get("/api/bookfavorite", function(req , res){
	var query = `  	    SELECT U.FirstName, U.LastName, B.ItemName
						FROM Book AS B, [User] AS U, BookFavorite AS BF
						WHERE B.ItemId = BF.ItemID AND U.PersonID = BF.UserID		`;
	executeQuery (res, query);
});

app.get("/api/bookrental", function(req , res){
	var query = `  	    SELECT U.FirstName, U.LastName, B.ItemName
						FROM Book AS B, [User] AS U, BookRental AS BR
						WHERE B.ItemId = BR.ItemID AND U.PersonID = BR.UserID		`;
	executeQuery (res, query);
});

app.get("/api/bookpurchase", function(req , res){
	var query = `  	    SELECT U.FirstName, U.LastName, B.ItemName
						FROM Book AS B, [User] AS U, BookPurchase AS BP
						WHERE B.ItemId = BP.ItemID AND U.PersonID = BP.UserID		  `;
	executeQuery (res, query);
});

app.get("/api/supplyfavorite", function(req , res){
	var query = `  	    SELECT U.FirstName, U.LastName, S.ItemName
						FROM OfficeSupply AS S, [User] AS U, OfficeSupplyFavorite AS SF
						WHERE S.ItemId = SF.ItemID AND U.PersonID = SF.UserID		`;
	executeQuery (res, query);
});

app.get("/api/supplypurchase", function(req , res){
	var query = `  	    SELECT U.FirstName, U.LastName, S.ItemName
						FROM OfficeSupply AS S, [User] AS U, OfficeSupplyPurchase AS SP
						WHERE S.ItemId = SP.ItemID AND U.PersonID = SP.UserID		  `;
	executeQuery (res, query);
});

app.get("/api/supplytypes", function(req , res){
	var query = `		SELECT [TypeID]
								,[TypeName]
						FROM [ThePupilsCorner].[dbo].[SupplyType] `;
	executeQuery (res, query);
});


app.get("/api/supply/:id", function(req , res){
	var query = `   SELECT os.ItemID, os.ItemName, os.Cost, os.Quantity, st.TypeID, st.TypeName
					FROM OfficeSupply AS os, SupplyType AS st
					WHERE os.OfficeSupplyTypeID = st.TypeID	AND os.ItemID = ` + req.params.id;
	//console.log("Query:", query);
	executeQuery (res, query);
});
/////////////////////////////////////////////////////////////////////////////////////////////
//POST API
/* app.post("/api/books", function(req , res){
	var query = "INSERT INTO Books VALUES ( " + req.body.ItemID + ", '" + req.body.ItemName + "', '" +  req.body.ISBN13 + "', '"  + req.body.ISBN10 + "')";
	console.log("Query:", query);
	executeQuery (res, query);
});*/

////////////////////////////////////////////////////////////////////////////////////////
// To add employee and add items to favorite. Needs addition of similar methods for rental/ purchase of items

app.post("/api/bookfavorite", function(req , res){
	var query = "INSERT INTO BookFavorite VALUES ( " + req.body.ItemID + ", " + req.body.PersonID + ")";
	console.log("Query:", query);
	executeQuery (res, query);
});

app.post("/api/supplyfavorite", function(req , res){
	var query = "INSERT INTO OfficeSupplyFavorite VALUES ( " + req.body.ItemID + ", " + req.body.PersonID + ")";
	console.log("Query:", query);
	executeQuery (res, query);
});

app.post("/api/employee", function(req , res){
	var query = "INSERT INTO Employee VALUES ( '" + req.body.FirstName + "', '" + req.body.LastName + "', '" + req.body.Email + "', '" + req.body.SSN +
				"', 0, '" + req.body.Street + "', '" + req.body.City + "', '" + req.body.State + "', '" + req.body.Country + "', " + req.body.JobTypeID +")";
	console.log("Query:", query);
	executeQuery (res, query);
});

app.post("/api/author", function(req , res){
	var query = "INSERT INTO Author VALUES ( '" + req.body.FirstName + "', '" + req.body.LastName + "')";
	console.log("Query:", query);
	executeQuery (res, query);
});

app.post("/api/publisher", function(req, res){
	var query = "INSERT INTO Publisher Values ('" + req.body.Name + "', '" + req.body.Street + "', '" + req.body.City + "', '" + req.body.State + "', '" + req.body.Country +"', '" + req.body.PhoneNumber + "')";
	console.log("Query: ", query);
	executeQuery(res, query);
});

app.post("/api/book", function(req, res){
	var query1 = "INSERT INTO Book Values ('" + req.body.ItemName + "', '" + req.body.Cost + "', '" + req.body.Quantity + "', '" + req.body.ISBN13 + "', '" + req.body.ISBN10 + "')";
	console.log("Query: ", query1);
	executeQuery(res, query1);
});

app.post("/api/bookpublisher", function(req, res){
	var query = "INSERT INTO BookPublisher Values (" + req.body.PublisherID + "," + req.body.ItemID + ", '"+ req.body.DatePublished + "')";
	console.log("Query: ", query);
	executeQuery(res, query);
});

app.post("/api/bookauthor", function(req, res){
	//now we must add the authors of the book by looping through the array to get the ID's 
	var query= "INSERT INTO BookAuthor Values (" + req.body.authorID_being_processed + "," + req.body.ItemID + ")"; 
	console.log("Query: ", query);
	executeQuery(res, query);

});

app.post("/api/supply", function(req, res){
	//now we must add the authors of the book by looping through the array to get the ID's 
	var query= "INSERT INTO OfficeSupply Values ('" + req.body.ItemName + "', " +
													 req.body.Cost + ", " + 
													 req.body.Quantity + ", " +
													 req.body.TypeID +")"; 
	console.log("Query: ", query);
	executeQuery(res, query);

});
////////////////////////////////////////////////////////////////////////////////////////
// To edit employee

app.put("/api/employee/:id", function(req , res){
	var query = "UPDATE Employee SET FirstName='" + req.body.FirstName  +  "', LastName='" + req.body.LastName + "', Email='" + req.body.Email + 
				"', SSN='" + req.body.SSN + "', Street='" + req.body.Street + "', City='" + req.body.City + "', State='" + req.body.State + 
				"', Country='"+ req.body.Country + "', JobTypeID=" + req.body.JobTypeID + " WHERE PersonId= " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.put("/api/author/:id", function(req , res){
	var query = "UPDATE Author SET FirstName='" + req.body.FirstName  +  "', LastName='" + req.body.LastName + "' WHERE AuthorID= " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.put("/api/publisher/:id", function(req , res){
	var query = "UPDATE Publisher SET Name='" + req.body.Name  +  
								"', Street ='" + req.body.Street + 
								"', City = '" + req.body.City +
								"', State = '" + req.body.State +
								"', Country = '" + req.body.Country +
								"', PhoneNumber = '" + req.body.PhoneNumber +
								"' WHERE PublisherID = " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

 app.put("/api/book/:id", function(req , res){
	var query = "UPDATE Book SET ItemName='" + req.body.ItemName +
							  "', Cost='" + req.body.Cost +
							  "', Quantity='" + req.body.Quantity + 
							"', ISBN13='" + req.body.ISBN13 + 
							"', ISBN10='" + req.body.ISBN10 + 
							"' WHERE ItemId= " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.put("/api/bookauthor/:id", function(req , res){
	var query = "UPDATE BookAuthor " + 
				"SET AuthorID = " + req.body.authorID_being_processed + 
				" WHERE BookAuthorID = " + req.body.bookAuthorID;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.put("/api/bookpublisher/:id", function(req , res){
	var query = "UPDATE BookPublisher " + 
				"SET PublisherID = " + req.body.PublisherID + 
				", Date = '" + req.body.DatePublished +
				"' WHERE ItemID = " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.put("/api/supply/:id", function(req , res){
	var query = "UPDATE OfficeSupply SET ItemName = '" + req.body.ItemName +
									"', Cost = " + req.body.Cost + 
									", Quantity = " + req.body.Quantity +
									", OfficeSupplyTypeID = " + req.body.TypeID +
									" WHERE ItemID = " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});
// DELETE API
 /*app.delete("/api/books/:id", function(req , res){
	var query = "DELETE FROM Books WHERE ItemId=" + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});*/

////////////////////////////////////////////////////////////////////////////////////////
// To fire or resign employee

app.delete("/api/author/:id", function(req , res){
	var query = "DELETE FROM Author WHERE Author.AuthorID =" + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.delete("/api/publisher/:id", function(req, res){
	var query = "DELETE FROM Publisher WHERE Publisher.PublisherID =" + req.params.id;
	console.log("Query:", query);
	executeQuery(res, query);
});

app.delete("/api/book/:id", function(req, res){
	var query = "DELETE FROM Book WHERE Book.ItemId =" + req.params.id;
	console.log("Query:", query);
	executeQuery(res, query);
});

app.delete("/api/bookpublisher/:id", function(req, res){
	var query = "DELETE FROM BookPublisher WHERE BookPublisher.ItemID =" + req.params.id;
	console.log("Query:", query);
	executeQuery(res, query);
});

app.delete("/api/bookauthor/:id", function(req, res){
	var query = "DELETE FROM BookAuthor WHERE BookAuthor.ItemID =" + req.params.id;
	console.log("Query:", query);
	executeQuery(res, query);
});

app.delete("/api/employee/:id", function(req , res){
	var query = "DELETE FROM Employee WHERE PersonId=" + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.delete("/api/supply/:id", function(req, res){
	var query = "DELETE FROM OfficeSupply WHERE ItemID = " + req.params.id;
	console.log("Query:", query);
	executeQuery (res, query);
});

app.delete("/api/clearrecords", function(req , res){
	var query = `	
	DELETE FROM BookFavorite;
	DELETE FROM BookRental;
	DELETE FROM BookPurchase;
	DELETE FROM OfficeSupplyPurchase;
	DELETE FROM OfficeSupplyFavorite;`;
	console.log("Query:", query);
	executeQuery (res, query);
});


