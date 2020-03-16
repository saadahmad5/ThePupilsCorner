
I searched and figured out to create a RESTful backend for our Web Project, using ExpressJs as backend connected to SQL Server database.

TOOLS:

SQL Server Express 2019 Developer
SQL Server Management System
Node Package Manager
Postman (For testing database)
VS Code (An IDE for coding)

STEPS:
1. Download and install the software.
2. Browse to "./Backend/." and type 'npm install' on the PowerShell.
3. Open SSMS to configure the user & password for localhost
	a. Login to SSMS by entering server name as 'localhost' and select 'Windows Authentication' as authentication
	b. Right-click on the localhost database and click Properties
	c. On the left pane, click Security and select the radio button saying 'SQL Server and Windows ... ' and click OK.
	d. Back on SSMS, on the left pane, expand Security> Logins> and right click on 'sa' and click Properties
	e. Modify the password and click Save
4. Press Win+S and look for SQL Server Configuration Manager 2019 and open it.
5. On left pane, expand SQL Server Network Configuration and click on Protocols for MSSQLSERVER.
6. Enable all the three services (Shared Memory, TCP/IP and Pipes)
7. On left pane, click SQL Server Services and restart the SQL Server (MSSQLSERVER) services
8. Close and re-open SSMS and login using:
	a. The server name is 'localhost'
	b. But authentication method is 'SQL Server Authentication' now.
	c. Type username as 'sa' and the password.
	d. Connect
9. On the left pane expand Databases and create a new database 'thepupilscorner'.
10. Under this database, create a new table named Books and its attribs are (ItemId, ItemName, ISBN13, ISBN10)
11. Open the VS Code in the './Backend/' folder
12. Open server.js, modify the user and password in dbConfig variable
13. Use the integrated terminal in VS Code and type 'npm start' in the prompt.
14. Open Postman and try HTTP requests
	a. GET: localhost:8080/api/books
	b. POST: localhost:8080/api/books [Body: {ItemID: "", ... }]
	c. PUT: localhost:8080/api/books/id
	d. DELETE: Same as PUT
	
15. So far I remember that followed the steps above to make it work, if it won't work for you, feel free to ask me.