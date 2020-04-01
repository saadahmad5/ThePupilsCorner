

INSERT INTO [User] VALUES 
	('Raed', 'Almomani', 'almomani@umich.edu'),
	('Muhammad' ,'Omar', 'muhammad@umich.edu');
	

INSERT INTO JobType VALUES
	('Employee'),
	('Manager');

INSERT INTO Employee VALUES
	('Saad', 'Ahmad', 'saadahm@umich.edu', '123123123', 40, '123 Mainstreet', 'Lahore', 'Punjab', 'PAK', 1),
	('Kawthar', 'Badran', 'kmbadran@umich.edu', '456456456', 80, '456 Nowhere Dr', 'Riyadh', 'Riyadh Region', 'KSA', 2),
	('Iman', 'Saleh', 'iasaleh@umich.edu', '789789789', 80, '789 Roundway Cir', 'Dearborn', 'Michigan', 'USA', 1);

INSERT INTO EmployeePhone VALUES
	(1, '7341111111'),
	(2, '3132222222'),
	(2, '3133333333'),
	(3, '3134444444');

INSERT INTO BookGenre VALUES
	('Adventure'),
	('Short Story'),
	('Non-fiction');

INSERT INTO Book VALUES
	('Lisa Goes To London', 100, 5, '123-777-777-7', '123-777-77'),
	('Lion King', 50, 6, '456-888-888-8', '456-888-88'),
	('Software Engg-A Prac', 164, 10, '789-999-999-9', '789-999-99');

INSERT INTO CategorizedBook VALUES
	(3,3),
	(1,2),
	(2,1),
	(1,1);

INSERT INTO BookFavorite VALUES
	(3,1),
	(1,1),
	(2,2);

INSERT INTO BookPurchase VALUES
	(3,1,'2020-03-26');

INSERT INTO BookRental VALUES
	(2,2,'2020-03-27');

INSERT INTO Publisher VALUES
	('McGraw-Hill','777 Street', 'New York City', 'New York', 'United States', '8003383987'),
	('Cengage', '888 Drive', 'Boston', 'Massachusetts', 'United States', '8003549706'),
	('Pearson', '999 Circle', 'City of London', 'London', 'United Kingdom', '8662640620');

INSERT INTO Author VALUES
	('Bruce', 'Maxim'),
	('Roger', 'Pressman'),
	('H-Q','Mitchel'),
	('Rob',' Minkoff'), 
	('Roger', 'Allers');

INSERT INTO BookAuthor VALUES
	('3', '1'),
	('4', '2'),
	('5', '2'),
	('1', '3'),
	('2', '3');

INSERT INTO BookPublisher VALUES
	(3, 1, '2004-07-01'),
	(2, 2, '1994-01-01'),
	(1, 3, '2019-09-15');

INSERT INTO SupplyType VALUES
	('Office Use'),
	('Writing Utensil'),
	('Paper');

INSERT INTO OfficeSupply VALUES
	('Stapler', 10, 10, 1),
	('Clip', 0.5, 50, 1),
	('Pen', 5, 100, 2),
	('Marker', 3, 200, 2),
	('Highlighter', 15, 40, 2),
	('Letter Ream', 10, 10, 3),
	('A4 Ream', 15, 25, 3);

INSERT INTO OfficeSupplyPurchase VALUES
	(7,2, '2020-01-10'),
	(3,2, '2020-02-15'),
	(1,1, '2020-02-15'),
	(6,1, '2020-03-15');

INSERT INTO OfficeSupplyFavorite VALUES
	(4,1),
	(5,2);

/*
SELECT * FROM [User]
SELECT * FROM [JobType]
SELECT * FROM [Employee]

SELECT * FROM EmployeePhone
SELECT * FROM BookGenre
SELECT * FROM Book

SELECT * FROM CategorizedBook
SELECT * FROM BookFavorite
SELECT * FROM BookPurchase
SELECT * FROM BookRental

SELECT * FROM Publisher;
SELECT * FROM Author;

SELECT * FROM BookAuthor;
SELECT * FROM BookPublisher;

SELECT * FROM SupplyType;
SELECT * FROM OfficeSupply;
SELECT * FROM OfficeSupplyPurchase;
SELECT * FROM OfficeSupplyFavorite;
*/

	/*
DELETE FROM OFficeSupplyFavorite;
DELETE FROM OfficeSupplyPurchase;
DELETE FROM OfficeSupply;
DELETE FROM SupplyType;
DELETE FROM BookPublisher;
DELETE FROM BookAuthor;
DELETE FROM Author;
DELETE FROM Publisher;
DELETE FROM BookRental;
DELETE FROM BookPurchase;
DELETE FROM BookFavorite;
DELETE FROM CategorizedBook;
DELETE FROM Book;
DELETE FROM BookGenre;
DELETE FROM EmployeePhone;
DELETE FROM Employee;
DELETE FROM JobType;
DELETE FROM [User];
	*/



