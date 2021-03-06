	/*
CREATE DATABASE ThePupilsCorner
	GO
 
USE ThePupilsCorner
	GO
	*/

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'User')
	CREATE TABLE [User] (
		PersonID INT NOT NULL PRIMARY KEY IDENTITY,
		FirstName VARCHAR(20) NOT NULL,
		LastName VARCHAR(20) NOT NULL,
		Email VARCHAR(25) NOT NULL
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'JobType')
	CREATE TABLE JobType (
		JobTypeID INT NOT NULL PRIMARY KEY IDENTITY,
		JobTypeName VARCHAR(20) NOT NULL,
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'Employee')
	CREATE TABLE Employee (
		PersonID INT NOT NULL PRIMARY KEY IDENTITY,
		FirstName VARCHAR(20) NOT NULL,
		LastName VARCHAR(20) NOT NULL,
		Email VARCHAR(25) NOT NULL,
		SSN VARCHAR(9) NOT NULL,
		Wage FLOAT(3) NOT NULL,
		Street VARCHAR(20),
		City VARCHAR(20),
		State VARCHAR(20),
		Country VARCHAR(20),
		JobTypeID INT FOREIGN KEY REFERENCES JobType(JobTypeID)
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'EmployeePhone')
	CREATE TABLE EmployeePhone (
		EmployeeID INT FOREIGN KEY REFERENCES Employee(PersonID) ON DELETE CASCADE,
		PhoneNumber VARCHAR(10),
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'BookGenre')
	CREATE TABLE BookGenre (
		GenreName VARCHAR(20) NOT NULL,
		GenreID INT NOT NULL PRIMARY KEY IDENTITY,
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'Book')
	CREATE TABLE Book (
		ItemName VARCHAR(20) NOT NULL,
		ItemId INT NOT NULL PRIMARY KEY IDENTITY,
		Cost FLOAT(5) NOT NULL,
		Quantity INT NOT NULL,
		ISBN13 VARCHAR(13),
		ISBN10 VARCHAR(10),
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'CategorizedBook')
	CREATE TABLE CategorizedBook (
		ItemID INT FOREIGN KEY REFERENCES Book(ItemID),
		GenreID INT FOREIGN KEY REFERENCES BookGenre(GenreID)
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'BookFavorite')
	CREATE TABLE BookFavorite (
		ItemID INT FOREIGN KEY REFERENCES Book(ItemID),
		UserID INT FOREIGN KEY REFERENCES [User](PersonID)
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'BookPurchase')
	CREATE TABLE BookPurchase (
		ItemID INT FOREIGN KEY REFERENCES Book(ItemID),
		UserID INT FOREIGN KEY REFERENCES [User](PersonID),
		[Date] DATE NOT NULL,
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'BookRental')
	CREATE TABLE BookRental (
		ItemID INT FOREIGN KEY REFERENCES Book(ItemID),
		UserID INT FOREIGN KEY REFERENCES [User](PersonID),
		[Date] DATE NOT NULL,
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'Publisher')
	CREATE TABLE Publisher (
		PublisherID INT NOT NULL PRIMARY KEY IDENTITY,
		[Name] VARCHAR(25) NOT NULL,
		Street VARCHAR (20) NOT NULL,
		City VARCHAR (20) NOT NULL,
		[State] VARCHAR (20) NOT NULL,
		Country VARCHAR (20) NOT NULL,
		PhoneNumber VARCHAR(10)
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'Author')
	CREATE TABLE Author (
		AuthorID INT NOT NULL PRIMARY KEY IDENTITY,
		FirstName VARCHAR(20) NOT NULL,
		LastName VARCHAR(20) NOT NULL
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'BookAuthor')
	CREATE TABLE BookAuthor (
		BookAuthorID INT NOT NULL PRIMARY KEY IDENTITY,
		AuthorID INT FOREIGN KEY REFERENCES Author(AuthorID),
		ItemID INT FOREIGN KEY REFERENCES Book(ItemID),
		)
	GO


IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'BookPublisher')
	CREATE TABLE BookPublisher (
		PublisherID INT FOREIGN KEY REFERENCES Publisher(PublisherID),
		ItemID INT FOREIGN KEY REFERENCES Book(ItemID),
		[Date] Date NOT NULL
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'SupplyType')
	CREATE TABLE SupplyType (
		TypeID INT NOT NULL PRIMARY KEY IDENTITY,
		TypeName VARCHAR(20) NOT NULL,
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'OfficeSupply')
	CREATE TABLE OfficeSupply (
		ItemID INT NOT NULL PRIMARY KEY IDENTITY,
		ItemName VARCHAR(20) NOT NULL,
		Cost FLOAT(5) NOT NULL,
		Quantity INT NOT NULL,
		OfficeSupplyTypeID INT FOREIGN KEY REFERENCES SupplyType(TypeID)
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'OfficeSupplyPurchase')
	CREATE TABLE OfficeSupplyPurchase (
		ItemID INT FOREIGN KEY REFERENCES OfficeSupply(ItemID),
		UserID INT FOREIGN KEY REFERENCES [User](PersonID),
		[Date] DATE NOT NULL,
		)
	GO

IF NOT EXISTS ( SELECT * FROM sysobjects WHERE NAME = 'OfficeSupplyFavorite')
	CREATE TABLE OfficeSupplyFavorite (
		ItemID INT FOREIGN KEY REFERENCES OfficeSupply(ItemID),
		UserID INT FOREIGN KEY REFERENCES [User](PersonID)
		)
	GO

	/*
	DROP TABLE OfficeSupplyFavorite;
	DROP TABLE OfficeSupplyPurchase;
	DROP TABLE OfficeSupply;
	DROP TABLE SupplyType;
	DROP TABLE BookPublisher;
	DROP TABLE BookAuthor;
	DROP TABLE Author;
	DROP TABLE Publisher;
	DROP TABLE BookRental;
	DROP TABLE BookPurchase;
	DROP TABLE BookFavorite;
	DROP TABLE CategorizedBook;
	DROP TABLE Book;
	DROP TABLE BookGenre;
	DROP TABLE EmployeePhone;
	DROP TABLE Employee;
	DROP TABLE JobType;
	DROP TABLE [User];
	*/

